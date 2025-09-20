"use client";
import { useSearchParams, useRouter } from "next/navigation";

const FILTERS = [
  { key:"readyToCook", label:"Ready-to-cook" },
  { key:"readyToEat", label:"Heat & eat (≤ 5 min)" },
  { key:"vegetarian", label:"Vegetarian" },
  { key:"gluten-free", label:"Gluten-free" },
  { key:"dairy-free", label:"Dairy-free" },
  { key:"fodmap-friendly", label:"FODMAP-friendly" },
];

export default function Filters(){
  const params = useSearchParams();
  const router = useRouter();
  const active = new Set(params.getAll("f"));

  function toggle(k: string){
    const next = new URLSearchParams(params.toString());
    if(active.has(k)) {
      const all = next.getAll("f").filter(x => x !== k);
      next.delete("f");
      all.forEach(x => next.append("f", x));
    } else {
      next.append("f", k);
    }
    router.push(`/products?${next.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map(f => (
        <button key={f.key}
          onClick={()=>toggle(f.key)}
          className={`px-3 py-1.5 rounded-full border text-sm ${active.has(f.key) ? "bg-brand text-white border-brand" : "border-gray-300 hover:bg-gray-100"}`}>
          {f.label}
        </button>
      ))}
    </div>
  );
}
