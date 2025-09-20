// app/recipes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/recipes/RecipeCard";

export const metadata: Metadata = {
  title: "Recipes — Tru Flavors",
  description:
    "Quick, practical recipes inspired by our curry kits and bases. Filter by time, heat, and diet.",
  alternates: { canonical: "/recipes" },
  openGraph: {
    title: "Recipes — Tru Flavors",
    description:
      "Quick, practical recipes inspired by Tru Flavors kits and bases.",
    url: "https://truflavors.org/recipes",
    images: [{ url: "/images/og.png" }],
  },
};

export default function RecipesPage() {
  // Prepare filter options from data
  const dietTags = ["vegetarian", "gluten-free", "dairy-free"];
  const heatLevels = ["mild", "medium", "hot"];
  const timeBrackets = ["≤ 5 min", "10–20 min", "20–30 min"];

  return (
    <section className="container-max py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link className="link" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Recipes</span>
      </nav>

      {/* HERO / HEADER */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Weeknight-simple recipes.{" "}
              <span className="text-brand">Chef-level flavor.</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Browse quick ideas inspired by our curry kits and bases. Choose your heat,
              time, and dietary tags — dinner’s on the table fast.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">≤ 5 min (RTE)</span>
              <span className="badge">10–20 min (RTC)</span>
              <span className="badge">Vegetarian / DF / GF</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
            <img
              src="/images/recipes/hero.jpg"
              alt="Assorted plated curries"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <div className="mt-8 rounded-2xl border bg-white p-5">
        <form className="grid gap-4 sm:grid-cols-3">
          {/* Time */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700">Time</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {timeBrackets.map((t) => (
                <label key={t} className="badge cursor-pointer">
                  <input type="checkbox" name="time" value={t} className="sr-only peer" />
                  <span className="peer-checked:underline">{t}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Heat */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700">Heat</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {heatLevels.map((h) => (
                <label key={h} className="badge cursor-pointer">
                  <input type="checkbox" name="heat" value={h} className="sr-only peer" />
                  <span className="peer-checked:underline capitalize">{h}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Diet */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700">Diet</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {dietTags.map((d) => (
                <label key={d} className="badge cursor-pointer">
                  <input type="checkbox" name="diet" value={d} className="sr-only peer" />
                  <span className="peer-checked:underline capitalize">{d}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </form>
        <p className="mt-3 text-xs text-gray-500">
          Tip: combine filters — e.g. “10–20 min” + “vegetarian” + “mild”.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => <RecipeCard key={r.id} r={r} />)}
      </div>

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Shop the bases behind the recipes</h2>
              <p className="mt-2 text-gray-700">
                Choose a ready-to-eat curry for ≤ 5 minutes, or a base for 10–20 minute cooking.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/recipes/cta.jpg"
                alt="Tru Flavors kits and plated dishes"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD (Recipe collection) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: recipes.slice(0, 12).map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://truflavors.org/recipes#${r.id}`,
              name: r.title,
            })),
          }),
        }}
      />
    </section>
  );
}

/**
 * Expected Tailwind utilities (as used elsewhere):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }
 * .bg-brand-light { @apply bg-amber-100; }
 */
