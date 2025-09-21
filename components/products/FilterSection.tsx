// components/products/FilterSection.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Route } from "next";

const TAGS = [
  "gluten-free",
  "dairy-free",
  "fodmap-friendly",
  "vegetarian",
  "spicy",
  "mild",
  "no-seed-oils",
  "bulk",
] as const;

const SORTS = [
  { key: "pop", label: "Popular" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "name", label: "Name A → Z" },
] as const;

// Map the visible category buttons to your canonical category keys in data/products.ts
const CATEGORY_MAP: Record<string, string> = {
  // Ready to Eat
  Meals: "ready-to-eat-meals",
  "Rice & Biryani": "ready-to-eat-rice",
  // Ready to Cook
  Gravies: "ready-to-cook-gravy",
  Pastes: "ready-to-cook-paste",
  // Enhancers
  Marinades: "marinades",
  Chutneys: "chutneys",
  // Regional / Global
  Asian: "asian-inspired",
  Chinese: "chinese-style",
  Mexican: "mexican-style",
  Sweets: "sweets",
};

export default function FilterSection() {
  const router = useRouter();
  const pathname = (usePathname() || "/products") as Route;
  const params = useSearchParams();

  const q = params.get("q") ?? "";
  const tag = params.get("tag") ?? "";
  const sort = params.get("sort") ?? "pop";

  function push(next: URLSearchParams) {
    const url = next.toString() ? (`${pathname}?${next}` as Route) : pathname;
    router.push(url);
  }

  function setParam(key: string, value?: string) {
    const next = new URLSearchParams(params.toString());
    if (value && value.trim() !== "") next.set(key, value);
    else next.delete(key);
    next.delete("page");
    push(next);
  }

  function setMany(kv: Record<string, string | undefined>) {
    const next = new URLSearchParams(params.toString());
    Object.entries(kv).forEach(([k, v]) => {
      if (v && v.trim() !== "") next.set(k, v);
      else next.delete(k);
    });
    next.delete("page");
    push(next);
  }

  function onCategoryClick(label: string) {
    const categoryKey = CATEGORY_MAP[label];
    if (!categoryKey) return;
    setMany({ category: categoryKey, q: undefined }); // reset search when switching category
  }

  function clearAll() {
    router.push(pathname);
  }

  const GROUPS: { heading: string; items: string[] }[] = [
    { heading: "Ready to Eat", items: ["Meals", "Rice & Biryani"] },
    { heading: "Ready to Cook", items: ["Gravies", "Pastes"] },
    { heading: "Enhancers", items: ["Marinades", "Chutneys"] },
    { heading: "Regional & Global", items: ["Asian", "Chinese", "Mexican", "Sweets"] },
  ];

  return (
    <section className="bg-gray-50 border-b">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        {/* Search (hero control) */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              setParam("q", String(fd.get("q") || ""));
            }}
            className="relative"
          >
            <input
              name="q"
              defaultValue={q}
              placeholder="Search products…"
              className="w-full rounded-full border pl-11 pr-4 py-3 text-base outline-none focus:ring-2 focus:ring-orange-200 shadow-sm"
            />
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔎</span>
          </form>
        </div>

        {/* Category grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g) => (
            <div key={g.heading} className="bg-white rounded-2xl ring-1 ring-gray-200 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{g.heading}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => onCategoryClick(label)}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-orange-100 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3">
            <div className="relative">
              <select
                className="appearance-none rounded-full border px-3 py-2 text-sm pr-8 focus:ring-2 focus:ring-orange-200 bg-white"
                value={tag}
                onChange={(e) => setParam("tag", e.target.value || undefined)}
                aria-label="Filter by tag"
              >
                <option value="">Filter by tag…</option>
                {TAGS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</div>
            </div>

            <div className="relative">
              <select
                className="appearance-none rounded-full border px-3 py-2 text-sm pr-8 focus:ring-2 focus:ring-orange-200 bg-white"
                value={sort}
                onChange={(e) => setParam("sort", e.target.value || undefined)}
                aria-label="Sort"
              >
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</div>
            </div>
          </div>

          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-orange-700 hover:underline"
          >
            Clear all
          </button>
        </div>
      </div>
    </section>
  );
}
