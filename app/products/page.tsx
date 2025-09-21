// app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, ALL_CATEGORIES, type Product } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Tru Flavors",
  description: "Ready-to-eat curries, ready-to-cook bases, marinades, chutneys, and more.",
  alternates: { canonical: "/products" },
};

type Props = { searchParams?: Record<string, string | string[] | undefined> };

function norm(v?: string | string[]) {
  return Array.isArray(v) ? v[0] : v;
}

export default function ProductsPage({ searchParams }: Props) {
  const q = (norm(searchParams?.q) || "").toLowerCase();
  const category = norm(searchParams?.category) as Product["category"] | undefined;
  const tag = norm(searchParams?.tag);

  let list = products;

  if (category) list = list.filter(p => p.category === category);
  if (tag) list = list.filter(p => p.tags?.includes(tag));
  if (q) {
    list = list.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
    );
  }

  return (
    <section className="container-max py-10">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-600 mt-1">
            Chef-crafted, gut-friendly meals & cooking bases. Use filters to narrow down.
          </p>
        </div>
        {/* Search */}
        <form className="mt-2 sm:mt-0">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search products…"
            className="w-full sm:w-64 rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200"
          />
        </form>
      </header>

      {/* Category chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/products" className={`badge hover:bg-gray-50 ${!category ? "ring-1" : ""}`}>All</Link>
        {ALL_CATEGORIES.map(c => (
          <Link
            key={c.key}
            href={{ pathname: "/products", query: { category: c.key, q: q || undefined, tag: tag || undefined } }}
            className={`badge hover:bg-gray-50 ${category === c.key ? "ring-1" : ""}`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Tag chips */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {["gluten-free","dairy-free","fodmap-friendly","spicy","mild","no-seed-oils","vegetarian","bulk"].map(t => (
          <Link
            key={t}
            href={{ pathname: "/products", query: { tag: t, q: q || undefined, category: category || undefined } }}
            className={`badge hover:bg-gray-50 ${tag === t ? "ring-1" : ""}`}
          >
            #{t}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <ProductCard key={p.id} p={p} />)}
      </div>

      {list.length === 0 && (
        <p className="mt-8 text-sm text-gray-500">
          No products matched. Try clearing filters or searching a different term.
        </p>
      )}
    </section>
  );
}
