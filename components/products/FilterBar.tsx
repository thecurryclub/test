// components/products/FilterBar.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ALL_CATEGORIES } from "@/data/products";

const TAGS = [
  "gluten-free",
  "dairy-free",
  "fodmap-friendly",
  "spicy",
  "mild",
  "no-seed-oils",
  "vegetarian",
  "bulk",
] as const;

const SORTS = [
  { key: "pop", label: "Popular" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
  { key: "name", label: "Name A → Z" },
] as const;

function toUrl(base: string, params: URLSearchParams) {
  const q = params.toString();
  return q ? (`${base}?${q}` as const) : (base as const);
}

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname() || "/products";
  const params = useSearchParams();

  // read current
  const q = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const tag = params.get("tag") ?? "";
  const sort = params.get("sort") ?? "pop";

  // helpers
  function setParam(key: string, value?: string) {
    const next = new URLSearchParams(params.toString());
    if (value && value.trim() !== "") next.set(key, value);
    else next.delete(key);
    // clean any pagination param if you add later
    next.delete("page");
    router.push(toUrl(pathname, next));
  }

  function clearAll() {
    router.push(pathname);
  }

  return (
    <div className="sticky top-[64px] z-30 border-b bg-white/90 backdrop-blur">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          {/* Categories: slim, scrollable on mobile */}
          <nav className="-mx-1 overflow-x-auto order-2 md:order-1">
            <div className="flex gap-2 px-1 pb-1">
              <Link
                href={toUrl("/products", new URLSearchParams([["q", q], ["tag", tag], ["sort", sort !== "pop" ? sort : ""]]))}
                className={`badge whitespace-nowrap ${!category ? "ring-1" : "bg-white hover:bg-gray-50"}`}
              >
                All
              </Link>
              {ALL_CATEGORIES.map((c) => {
                const p = new URLSearchParams(params.toString());
                p.set("category", c.key);
                return (
                  <Link
                    key={c.key}
                    href={toUrl("/products", p)}
                    className={`badge whitespace-nowrap ${category === c.key ? "ring-1" : "bg-white hover:bg-gray-50"}`}
                    title={c.label}
                  >
                    {c.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right controls */}
          <div className="order-1 md:order-2 flex flex-wrap items-center gap-2 md:gap-3">
            {/* Search */}
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
                className="w-[240px] rounded-full border pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔎
              </span>
            </form>

            {/* Tag dropdown */}
            <div className="relative">
              <select
                className="appearance-none rounded-full border px-3 py-2 text-sm pr-7 focus:ring-2 focus:ring-orange-200"
                value={tag}
                onChange={(e) => setParam("tag", e.target.value || undefined)}
                aria-label="Dietary / style tag"
              >
                <option value="">Tags…</option>
                {TAGS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">▾</div>
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                className="appearance-none rounded-full border px-3 py-2 text-sm pr-7 focus:ring-2 focus:ring-orange-200"
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
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">▾</div>
            </div>

            {/* Clear */}
            {(q || category || tag || (sort && sort !== "pop")) && (
              <button
                type="button"
                onClick={clearAll}
                className="text-xs text-orange-700 hover:underline ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
