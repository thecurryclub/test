// app/products/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import {
  products,
  ALL_CATEGORIES,
  type Product as ProductType,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Tru Flavors",
  description:
    "Chef-crafted, gut-friendly meals, curry bases, marinades, and more.",
  alternates: { canonical: "/products" },
};

type Props = { searchParams?: Record<string, string | string[] | undefined> };

function one(v?: string | string[]) {
  return Array.isArray(v) ? v[0] : v;
}

function qobj(pathname: string, query: Record<string, string | undefined>) {
  // Remove undefined to keep URLs tidy
  const clean: Record<string, string> = {};
  Object.entries(query).forEach(([k, v]) => {
    if (v && String(v).trim() !== "") clean[k] = v;
  });
  return { pathname, query: Object.keys(clean).length ? clean : undefined } as const;
}

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
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    // "pop" (default) — leave as-is for now or later hook to analytics
  }

  const resultsLabel =
    list.length === 0 ? "No products" : `${list.length} product${list.length > 1 ? "s" : ""}`;

  const hasAnyFilter = Boolean(q || category || tag || (sort && sort !== "pop"));

  return (
    <section className="relative">
      {/* Sticky slim filter bar */}
      <div className="sticky top-[64px] z-30 border-b bg-white/90 backdrop-blur">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
            {/* Categories: slim, scrollable on mobile */}
            <nav className="order-2 md:order-1 -mx-1 overflow-x-auto">
              <div className="flex gap-2 px-1 pb-1">
                <Link
                  href={qobj("/products", { q, tag, sort })}
                  className={`badge whitespace-nowrap ${
                    !category ? "ring-1" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  All
                </Link>
                {ALL_CATEGORIES.map((c) => (
                  <Link
                    key={c.key}
                    href={qobj("/products", { category: c.key, q, tag, sort })}
                    className={`badge whitespace-nowrap ${
                      category === c.key ? "ring-1" : "bg-white hover:bg-gray-50"
                    }`}
                    title={c.label}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right controls */}
            <div className="order-1 md:order-2 flex flex-wrap items-center gap-2 md:gap-3">
              {/* Search */}
              <form className="relative">
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

              {/* Tag dropdown (optional) */}
              <div className="relative">
                <select
                  className="appearance-none rounded-full border px-3 py-2 text-sm pr-7 focus:ring-2 focus:ring-orange-200"
                  defaultValue={tag || ""}
                  onChange={() => {}}
                  aria-label="Dietary / style tag"
                >
                  <option value="">Tags…</option>
                  {TAGS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {/* Link overlay to preserve server routing without JS handlers */}
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                  ▾
                </div>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  className="appearance-none rounded-full border px-3 py-2 text-sm pr-7 focus:ring-2 focus:ring-orange-200"
                  defaultValue={sort}
                  onChange={() => {}}
                  aria-label="Sort"
                >
                  {SORTS.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                  ▾
                </div>
              </div>
            </div>
          </div>

          {/* Wire the selects with progressive enhancement: present as links for non-JS */}
          <noscript>
            <div className="pb-3 text-xs text-gray-500">
              JavaScript is off. After changing a dropdown, use the button below.
            </div>
          </noscript>
        </div>
      </div>

      {/* Active filters + results */}
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Our Products
            </h1>
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
                Category: {
                  ALL_CATEGORIES.find((c) => c.key === category)?.label ?? category
                }
              </span>
            )}
            {tag && <span className="badge bg-white ring-1">#{tag}</span>}
            {q && <span className="badge bg-white ring-1">“{q}”</span>}
            {sort && sort !== "pop" && (
              <span className="badge bg-white ring-1">
                {SORTS.find((s) => s.key === sort)?.label}
              </span>
            )}
            <Link
              href={qobj("/products", {})}
              className="ml-1 text-xs text-orange-700 hover:underline"
            >
              Clear all
            </Link>
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

      {/* Progressive enhancement: linkify dropdown changes via URL (no client component) */}
      <script
        // This tiny inline script only wires the two selects to navigate with query params.
        // It runs after hydration; safe for SSR. No external deps.
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var root = document.currentScript && document.currentScript.parentElement;
  if(!root) root = document;
  var tagSel = root.querySelector('select[aria-label="Dietary / style tag"]');
  var sortSel = root.querySelector('select[aria-label="Sort"]');
  function toQuery(params){
    var url = new URL(window.location.href);
    Object.keys(params).forEach(function(k){
      var v = params[k];
      if(v && v.trim() !== "") url.searchParams.set(k, v);
      else url.searchParams.delete(k);
    });
    // Reset page param if you add pagination later
    url.searchParams.delete("page");
    return url.toString();
  }
  if(tagSel){
    tagSel.addEventListener('change', function(){
      window.location.href = toQuery({ tag: tagSel.value });
    });
  }
  if(sortSel){
    sortSel.addEventListener('change', function(){
      window.location.href = toQuery({ sort: sortSel.value });
    });
  }
})();`,
        }}
      />
    </section>
  );
}
