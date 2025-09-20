// app/ingredients/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ingredients Glossary — Tru Flavors",
  description:
    "Our ingredient philosophy with a practical Yes / Caution / Avoid list and an A–Z glossary. Transparent labels for gut-friendly eating.",
  alternates: { canonical: "/ingredients" },
  openGraph: {
    title: "Ingredients Glossary — Tru Flavors",
    description:
      "A practical Yes / Caution / Avoid list and A–Z glossary of the ingredients we use — and why.",
    url: "https://truflavors.org/ingredients",
    images: [{ url: "/images/og.png" }],
  },
};

type Tier = "green" | "caution" | "avoid";

type Item = {
  name: string;
  tier: Tier;
  family?: string;
  notes?: string;
};

const GREEN: Item[] = [
  { name: "Ginger", tier: "green", family: "Aromatic", notes: "Bright, soothing heat; widely tolerated." },
  { name: "Coriander (seeds & leaf)", tier: "green", family: "Herb/Spice", notes: "Citrusy aroma adds depth without harshness." },
  { name: "Cumin", tier: "green", family: "Spice", notes: "Warm, earthy base for many blends." },
  { name: "Turmeric", tier: "green", family: "Spice", notes: "Color and gentle bitterness; balance with fats/acid." },
  { name: "Kashmiri Chili", tier: "green", family: "Chili", notes: "Colorful, mild heat for layered flavor." },
  { name: "Fenugreek (leaves)", tier: "green", family: "Herb", notes: "Rounded bitterness; use lightly for aroma." },
  { name: "Curry Leaves", tier: "green", family: "Herb", notes: "Fragrant when bloomed in hot fat." },
  { name: "Fennel", tier: "green", family: "Spice", notes: "Sweet-anise lift; pairs with tomato & seafood." },
  { name: "Cardamom", tier: "green", family: "Spice", notes: "Floral sweetness; a little goes a long way." },
  { name: "Tomato", tier: "green", family: "Base", notes: "Acid balance in sauces; layer with fat." },
  { name: "Coconut Milk", tier: "green", family: "Base", notes: "Creamy body; check tolerance to coconut fat." },
  { name: "Spinach / Mustard Greens", tier: "green", family: "Greens", notes: "Silky greens bases in saag/palak." },
  { name: "Ghee", tier: "green", family: "Fat", notes: "Clean dairy fat; rich mouthfeel; lactose removed." },
  { name: "Olive Oil", tier: "green", family: "Fat", notes: "Everyday neutral-to-fruity fat choice." },
  { name: "Lemon / Lime", tier: "green", family: "Acid", notes: "Finishing brightness without harshness." },
  { name: "Tamarind", tier: "green", family: "Acid", notes: "Tangy complexity; moderate for balance." },
  { name: "White Fish", tier: "green", family: "Protein", notes: "Lean, fast-cooking protein for light curries." },
  { name: "Chicken", tier: "green", family: "Protein", notes: "Lean, versatile; pairs with most bases." },
  { name: "Paneer / Tofu", tier: "green", family: "Protein", notes: "Gentle protein options with mild flavor." },
  { name: "Chickpeas", tier: "green", family: "Pulse", notes: "Comforting; watch portion if sensitive to legumes." },
];

const CAUTION: Item[] = [
  { name: "Onion", tier: "caution", family: "Aromatic", notes: "Common FODMAP trigger; use lightly or choose variants." },
  { name: "Garlic", tier: "caution", family: "Aromatic", notes: "Aromatic & sweet; can be a FODMAP trigger for some." },
  { name: "Fresh Green Chilies", tier: "caution", family: "Chili", notes: "Heat varies; adjust to comfort level." },
  { name: "Black Pepper", tier: "caution", family: "Spice", notes: "Peppery finish; balance with fat/acid." },
  { name: "Yogurt / Cream", tier: "caution", family: "Dairy", notes: "Richness & body; check lactose sensitivity." },
  { name: "Cashew", tier: "caution", family: "Nut", notes: "Creamy dairy-free body; potential allergen." },
  { name: "Cilantro (leaf)", tier: "caution", family: "Herb", notes: "Common preference sensitivity (soapy perception)." },
  { name: "Mustard Seeds", tier: "caution", family: "Spice", notes: "Fragrant tadka; bloom gently to avoid harshness." },
  { name: "Tamarind Concentrate", tier: "caution", family: "Acid", notes: "Strong; use measured amounts." },
  { name: "Beans (various)", tier: "caution", family: "Pulse", notes: "Comforting protein; portion awareness helps." },
];

const AVOID: Item[] = [
  { name: "Artificial Flavors / Colors", tier: "avoid", family: "Additive", notes: "We keep labels clear and kitchen-real." },
  { name: "Unnecessary Stabilizers", tier: "avoid", family: "Additive", notes: "Avoided where possible; process > additives." },
  { name: "Highly Processed Seed Oils", tier: "avoid", family: "Fat", notes: "We prefer ghee or olive oil in core recipes." },
  { name: "Excessive Heat Extracts", tier: "avoid", family: "Additive", notes: "We balance for flavor, not “dare-level” spice." },
];

const ALL: Item[] = [...GREEN, ...CAUTION, ...AVOID].sort((a, b) =>
  a.name.localeCompare(b.name),
);

const tierLabel: Record<Tier, string> = {
  green: "Often Works Well",
  caution: "Caution / Context",
  avoid: "We Avoid",
};

const tierClass: Record<Tier, string> = {
  green: "bg-emerald-50 border-emerald-200",
  caution: "bg-amber-50 border-amber-200",
  avoid: "bg-rose-50 border-rose-200",
};

const badgeClass: Record<Tier, string> = {
  green: "border-emerald-300 text-emerald-700",
  caution: "border-amber-300 text-amber-700",
  avoid: "border-rose-300 text-rose-700",
};

// Optional JSON-LD (ItemList for the glossary)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALL.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
  })),
};

export default function IngredientsPage() {
  return (
    <section className="container-max py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link className="link" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Ingredients</span>
      </nav>

      {/* HERO */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Transparent ingredients.{" "}
              <span className="text-brand">Real-kitchen rules.</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our ingredient philosophy is practical: flavor-forward and
              gut-friendly by design. Below you’ll find our Yes / Caution /
              Avoid list and an A–Z glossary explaining what we use — and why.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Transparent labels</span>
              <span className="badge">No seed oils</span>
              <span className="badge">Gluten-free options</span>
              <span className="badge">Dairy-free options</span>
              <span className="badge">≤ 5 min (RTE)</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/standards-ingredients" className="btn btn-primary">Standards &amp; Ingredients</Link>
              <Link href="/products" className="btn btn-ghost">Browse Products</Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
            <img
              src="/images/ingredients/hero.jpg"
              alt="Clean ingredients arranged on a board"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* IN-PAGE NAV */}
      <div className="mt-8 overflow-x-auto">
        <ul className="flex gap-3 text-sm">
          {[
            { href: "#yes", label: "Yes (Often Works Well)" },
            { href: "#caution", label: "Caution / Context" },
            { href: "#avoid", label: "We Avoid" },
            { href: "#glossary", label: "A–Z Glossary" },
          ].map((i) => (
            <li key={i.href}>
              <a href={i.href} className="badge hover:bg-gray-50">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* YES / CAUTION / AVOID */}
      <section id="yes" className="mt-12">
        <div className={`rounded-3xl border p-6 md:p-8 ${tierClass.green}`}>
          <h2 className="text-xl font-semibold">Yes — Often Works Well</h2>
          <p className="mt-2 text-gray-700">
            Flavor-forward and commonly well-tolerated when prepared thoughtfully.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GREEN.map((it) => (
              <article key={it.name} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold flex items-center gap-2">
                  {it.name}
                  <span className={`badge ${badgeClass.green}`}>Yes</span>
                </h3>
                <p className="mt-1 text-xs text-gray-500">{it.family}</p>
                {it.notes && <p className="mt-2 text-sm text-gray-600">{it.notes}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="caution" className="mt-12">
        <div className={`rounded-3xl border p-6 md:p-8 ${tierClass.caution}`}>
          <h2 className="text-xl font-semibold">Caution — Context Matters</h2>
          <p className="mt-2 text-gray-700">
            Great flavor drivers; adjust portion/technique for your comfort level.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAUTION.map((it) => (
              <article key={it.name} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold flex items-center gap-2">
                  {it.name}
                  <span className={`badge ${badgeClass.caution}`}>Caution</span>
                </h3>
                <p className="mt-1 text-xs text-gray-500">{it.family}</p>
                {it.notes && <p className="mt-2 text-sm text-gray-600">{it.notes}</p>}
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-600">
            *FODMAP tolerance varies by person. Start smaller and scale as comfortable.
          </p>
        </div>
      </section>

      <section id="avoid" className="mt-12">
        <div className={`rounded-3xl border p-6 md:p-8 ${tierClass.avoid}`}>
          <h2 className="text-xl font-semibold">We Avoid</h2>
          <p className="mt-2 text-gray-700">
            Not part of our clean-label approach or unnecessary for great flavor.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AVOID.map((it) => (
              <article key={it.name} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold flex items-center gap-2">
                  {it.name}
                  <span className={`badge ${badgeClass.avoid}`}>Avoid</span>
                </h3>
                <p className="mt-1 text-xs text-gray-500">{it.family}</p>
                {it.notes && <p className="mt-2 text-sm text-gray-600">{it.notes}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSARY */}
      <section id="glossary" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">A–Z Glossary</h2>
          <p className="mt-2 text-gray-700">
            A practical reference for the ingredients we rely on — and how we use them.
          </p>

          {/* Alphabet quick jump */}
          <div className="mt-6 overflow-x-auto">
            <ul className="flex gap-2 text-xs">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((ch) => (
                <li key={ch}>
                  <a href={`#letter-${ch}`} className="badge">{ch}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group by letter */}
          <div className="mt-8 space-y-8">
            {groupByFirstLetter(ALL).map(({ letter, items }) => (
              <div key={letter} id={`letter-${letter}`}>
                <h3 className="text-lg font-semibold">{letter}</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((it) => (
                    <article key={it.name} className="rounded-2xl border p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold">{it.name}</h4>
                          {it.family && <p className="text-xs text-gray-500 mt-0.5">{it.family}</p>}
                        </div>
                        <span className={`badge ${
                          it.tier === "green"
                            ? badgeClass.green
                            : it.tier === "caution"
                            ? badgeClass.caution
                            : badgeClass.avoid
                        }`}>
                          {it.tier === "green" ? "Yes" : it.tier === "caution" ? "Caution" : "Avoid"}
                        </span>
                      </div>
                      {it.notes && <p className="mt-2 text-sm text-gray-600">{it.notes}</p>}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/standards-ingredients" className="btn btn-ghost">Read Standards</Link>
            <Link href="/products/collections" className="btn btn-primary">Browse Collections</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Cook with confidence</h2>
              <p className="mt-2 text-gray-700">
                Explore ready-to-eat curries or build your own with our balanced bases.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/ingredients/cta.jpg"
                alt="Plated curry bowls with fresh herbs"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legal note */}
      <p className="mt-6 text-xs text-gray-500">
        *Information is general and not medical advice. Always follow your clinician’s guidance and check product labels.
      </p>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

// ---- Helpers ----
function groupByFirstLetter(items: Item[]) {
  const map = new Map<string, Item[]>();
  for (const it of items) {
    const letter = (it.name[0] || "#").toUpperCase();
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(it);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, items]) => ({ letter, items: items.sort((x, y) => x.name.localeCompare(y.name)) }));
}

/**
 * Expected Tailwind utilities (aligned with your other pages):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }     // adjust to your brand token
 * .bg-brand { @apply bg-amber-600; }         // adjust to your brand token
 * .bg-brand-light { @apply bg-amber-100; }   // adjust as needed
 */
