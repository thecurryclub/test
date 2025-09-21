// components/ProductCard.tsx
import Link from "next/link";
export type { Product } from "@/data/products"; // re-export the Product type so `import type { Product } from "@/components/ProductCard"` works

import type { Product } from "@/data/products";

// Named export (so `import { ProductCard } ...` works)
export function ProductCard({ p }: { p: Product }) {
  const img = p.image || "/images/placeholder.svg";
  const href = { pathname: "/products/[id]", query: { id: p.id } }; // typedRoutes-safe
  return (
    <article className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow">
      <Link href={href}>
        <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold leading-tight">
          <Link href={href} className="hover:underline">
            {p.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mt-1">£{p.price.toFixed(2)}</p>
        <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
          {p.vegetarian && <span className="badge">Vegetarian</span>}
          {p.readyToEat && <span className="badge">≤ 5 min</span>}
          {p.tags?.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

// Default export (so `import ProductCard from "@/components/ProductCard"` also works)
export default ProductCard;
