"use client";
import Filters from "@/components/products/Filters";
import { ProductCard, Product } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

function matchesFilters(p: any, active: string[]) {
  if (active.length === 0) return true;
  for (const f of active) {
    if (f === "readyToCook" && p.readyToCook) continue;
    if (f === "readyToEat" && p.readyToEat) continue;
    if (f === "vegetarian" && p.vegetarian) continue;
    if (p.tags?.includes(f)) continue;
    return false;
  }
  return true;
}

export default function ProductsGrid({ products }: { products: Product[] }) {
  const params = useSearchParams();
  const active = params.getAll("f");
  const goal = params.get("goal");
  let filtered = products.filter(p => matchesFilters(p, active));
  if (goal === "sub5") {
    filtered = filtered.filter(p => (p.prepTime ?? 999) <= 5 || p.readyToEat);
  } else if (goal === "digestive") {
    filtered = filtered.filter(p => (p.vegetarian ?? false) || p.tags?.includes("mild"));
  } else if (goal === "weight") {
    filtered = filtered.filter(p => (p.nutrition?.calories ?? 999) <= 180 && (p.nutrition?.fat ?? 999) <= 7);
  }

  return (
    <div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Filters />
        {goal && <span className="text-xs text-gray-500">Goal: {goal === "sub5" ? "Under 5 minutes" : goal === "digestive" ? "Digestive comfort" : "Weight-friendly"}</span>}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (<ProductCard key={p.id} p={p} />))}
        {filtered.length === 0 && <p className="text-gray-500">No products match your filters.</p>}
      </div>
      {active.includes("fodmap-friendly") && <p className="mt-4 text-xs text-gray-500">*“FODMAP-friendly” is general guidance — individual tolerance varies.</p>}
    </div>
  );
}
