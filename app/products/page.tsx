// app/products/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import FilterSection from "@/components/products/FilterSection";
import { products, ALL_CATEGORIES, type Product as ProductType } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Tru Flavors",
  description: "Chef-crafted, gut-friendly meals, curry bases, marinades, and more.",
  alternates: { canonical: "/products" },
};

type Props = { searchParams?: Record<string, string | string[] | undefined> };
function one(v?: string | string[]) { return Array.isArray(v) ? v[0] : v; }

const SORTS = [
  { key: "pop", label: "Popular" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "name", label: "Name A → Z" },
] as const;

export default function ProductsPage({ searchParams }: Props) {
  const q = (one(searchParams?.q) || "").trim();
  const category = one(searchParams?.category) as ProductType["category"] | undefined;
  const tag = one(searchParams?.tag);
  const sort = one(searchParams?.sort) || "pop";

  // filter
  let list = products.slice();
  if (category) list = list.filter((p) => p.category === category);
  if (tag) list = list.filter((p) => (p.tags ?? []).includes(tag));
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.id.toLowerCase().includes(needle) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(needle))
    );
  }

  // sort
  switch (sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    // "pop" -> no op
  }

  const resultsLabel = list.length === 0 ? "No products" : `${list.length} product${list.length > 1 ? "s" : ""}`;
  const hasAnyFilter = Boolean(q || category || tag || (sort && sort !== "pop"));

  return (
    <section className="relative">
      {/* Clean, anchored filter header (no sticky) */}
      <FilterSection />

      <div className="container-max px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Products</h1>
            <p className="text-sm text-gray-600 mt-1">
              Chef-crafted, gut-friendly. Ready-to-eat and ready-to-cook.
            </p>
          </div>
          <div className="text-sm text-gray-600">{resultsLabel}</div>
        </header>

        {hasAnyFilter && (
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            {category && (
              <span className="badge bg-white ring-1">
                Category: {ALL_CATEGORIES.find((c) => c.key === category)?.label ?? category}
              </span>
            )}
            {tag && <span className="badge bg-white ring-1">#{tag}</span>}
            {q && <span className="badge bg-white ring-1">“{q}”</span>}
            {sort && sort !== "pop" && (
              <span className="badge bg-white ring-1">
                {SORTS.find((s) => s.key === sort)?.label}
              </span>
            )}
          </div>
        )}

        {/* Grid */}
        <Suspense fallback={<div className="py-12 text-sm text-gray-500">Loading…</div>}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </Suspense>

        {list.length === 0 && (
          <p className="py-16 text-center text-sm text-gray-500">
            No products matched. Try clearing filters or searching a different term.
          </p>
        )}
      </div>
    </section>
  );
}
