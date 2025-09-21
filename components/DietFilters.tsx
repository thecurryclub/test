"use client";
import { useState } from "react";
import type { Product } from "@/components/ProductCard";
import { ProductCard } from "@/components/ProductCard";

function prettyLabel(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

type Props = { products: Product[] };

export default function DietFilters({ products }: Props) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  const toggle = (f:string) => setFilters(prev => prev.includes(f) ? prev.filter(x=>x!==f) : prev.concat(f));

  const visible = products.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesFilters = filters.length === 0 || filters.every((f) => (p.tags ?? []).includes(f));
    return matchesQuery && matchesFilters;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center">
        <input
          className="border rounded-xl px-3 py-2 flex-1 min-w-[220px]"
          placeholder="Search kits (e.g., Thai, Chickpea)"
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />
        {["gluten-free","dairy-free","high-protein","fodmap-friendly"].map(f => (
          <button
            key={f}
            onClick={()=>toggle(f)}
            className={`btn ${filters.includes(f) ? "bg-brand text-white" : "bg-gray-100"}`}
            aria-pressed={filters.includes(f)}
          >
            {prettyLabel(f)}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(p => <ProductCard key={p.id} p={p} />)}
        {visible.length === 0 && <p className="text-gray-600">No kits match those filters yet.</p>}
      </div>
    </div>
  );
}
