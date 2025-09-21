// app/products/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  const p = products.find(x => x.id === params.id);
  return {
    title: p ? `${p.name} — Tru Flavors` : "Product — Tru Flavors",
    description: p?.description || "Chef-crafted, gut-friendly cooking made easy.",
    alternates: { canonical: `/products/${params.id}` },
  };
}

export default function ProductDetail({ params }: Props) {
  const p = products.find(x => x.id === params.id);
  if (!p) {
    return (
      <section className="container-max py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/products" className="link mt-2 inline-block">Back to products →</Link>
      </section>
    );
  }

  const img = p.image || "/images/placeholder.svg";

  return (
    <section className="container-max py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl overflow-hidden border bg-white">
          <div className="relative aspect-[4/5]">
            <Image src={img} alt={p.name} fill className="object-cover" />
          </div>
        </div>

        <div>
          <nav className="text-xs text-gray-500">
            <Link href="/products" className="hover:underline">Products</Link> / <span>{p.name}</span>
          </nav>

          <h1 className="mt-2 text-3xl font-bold">{p.name}</h1>
          <p className="mt-2 text-xl">£{p.price.toFixed(2)}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {p.vegetarian && <span className="badge">Vegetarian</span>}
            {p.readyToEat && <span className="badge">≤ 5 min</span>}
            {p.tags?.map(t => <span key={t} className="badge">{t}</span>)}
          </div>

          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            {p.description || "Balanced spice, cleaner fats, and clear labels. Pair with your choice of protein and vegetables for a complete meal."}
          </p>

          <div className="mt-6 flex gap-3">
            <button className="btn btn-primary">Add to cart</button>
            <Link href="/how-it-works" className="btn btn-ghost">How it works</Link>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            *Allergen info on pack. Gluten-free and dairy-free options where tagged.
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">You may also like</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter(x => x.category === p.category && x.id !== p.id)
            .slice(0, 6)
            .map(x => {
              const href = { pathname: "/products/[id]", query: { id: x.id } };
              const xi = x.image || "/images/placeholder.svg";
              return (
                <article key={x.id} className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow">
                  <Link href={href}>
                    <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={xi} alt={x.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold leading-tight">
                      <Link href={href} className="hover:underline">{x.name}</Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">£{x.price.toFixed(2)}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
