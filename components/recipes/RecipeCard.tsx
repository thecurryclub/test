// components/recipes/RecipeCard.tsx
import Link from "next/link";
import type { Recipe } from "@/data/recipes";

export default function RecipeCard({ r }: { r: Recipe }) {
  const img = r.image || "/images/placeholder.svg";

  return (
    <article id={r.id} className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow">
      <div className="aspect-[4/3] bg-brand-light/30">
        <img src={img} alt={r.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-tight">{r.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{r.time} • {r.heat.toUpperCase()}</p>
          </div>
          <div className="text-right">
            {r.diet?.map((d) => <span key={d} className="badge ml-2 capitalize">{d}</span>)}
          </div>
        </div>

        <p className="mt-2 text-gray-600 text-sm">{r.summary}</p>

        {r.basedOn && (
          <p className="mt-3 text-xs text-gray-500">
            Based on:{" "}
            <a href={r.basedOn.href} target="_blank" rel="noreferrer" className="link">
              {r.basedOn.label}
            </a>
          </p>
        )}

        <div className="mt-4 rounded-xl border bg-white p-4">
          <h4 className="text-sm font-semibold">Method (Quick)</h4>
          <ol className="mt-2 list-decimal ml-5 text-sm text-gray-700 space-y-1">
            {r.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </div>

        {r.tips && (
          <p className="mt-3 text-xs text-gray-500">
            Tip: {r.tips}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {r.tags?.map((t) => <span key={t} className="badge text-xs">{t}</span>)}
        </div>
      </div>
    </article>
  );
}
