"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductsGrid from "@/components/products/ProductsGrid";
import { products } from "@/data/products";

type Props = {
  title: string;
  defaultFilters: string[]; // keys matching Filters.tsx keys: readyToCook, readyToEat, vegetarian, gluten-free, etc.
  subtitle?: string;
};

export default function Collection({ title, subtitle, defaultFilters }: Props){
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    // Ensure all default filters are present at least once in `f`
    const current = new Set(params.getAll("f"));
    let changed = false;
    for (const f of defaultFilters) {
      if (!current.has(f)) {
        current.add(f);
        changed = true;
      }
    }
    if (changed) {
      const qs = new URLSearchParams();
      for (const f of current) qs.append("f", f);
      const goal = params.get("goal");
      if (goal) qs.set("goal", goal);
      router.replace(`?${qs.toString()}`);
    }
  // Intentionally run only on mount; eslint disabled for exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      <ProductsGrid products={products} />
    </section>
  );
}