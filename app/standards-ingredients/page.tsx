// app/standards-ingredients/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standards & Ingredients — Tru Flavors",
  description:
    "Our clean-label standards and ingredient philosophy: transparent sourcing, gut-friendly profiles, and consistency at scale.",
  alternates: { canonical: "/standards-ingredients" },
  openGraph: {
    title: "Standards & Ingredients — Tru Flavors",
    description:
      "Clean-label standards and ingredient philosophy for gut-friendly, ready-to-heat global curries.",
    url: "https://truflavors.org/standards-ingredients",
    images: [{ url: "/images/og.png" }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you use seed oils?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We avoid highly processed seed oils in our recipes. We prefer ghee and olive oil where possible.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products gluten-free or dairy-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Many items have gluten-free and dairy-free variants. We label allergens and sensitivities clearly on each product page.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I prepare your products?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ready-to-eat items heat in ≤ 5 minutes; ready-to-cook sauces typically take 10–20 minutes depending on your protein/veg.",
      },
    },
  ],
};

export default function StandardsIngredientsPage() {
  return (
    <section className="container-max py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link className="link" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Standards &amp; Ingredients</span>
      </nav>

      {/* HERO */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Clean standards.{" "}
              <span className="text-brand">Clear ingredients.</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We build products the way great home kitchens do: simple,
              transparent ingredients; balanced spice; and processes that
              deliver consistency and comfort — fast.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Transparent labels</span>
              <span className="badge">No seed oils</span>
              <span className="badge">Gluten-free options</span>
              <span className="badge">Dairy-free options</span>
              <span className="badge">≤ 5 min (RTE)</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">Browse Products</Link>
              <Link href="/ingredients" className="btn btn-ghost">Ingredient Glossary</Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
              <img
                src="/images/standards-ingredients/hero.jpg"
                alt="Clean, transparent ingredients on a board"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden md:block">
              <div className="rounded-2xl bg-white/80 backdrop-blur border px-4 py-3 shadow-sm">
                <p className="text-xs text-gray-500">Average heat &amp; eat</p>
                <p className="text-lg font-semibold">≤ 5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* IN-PAGE NAV */}
      <div className="mt-8 overflow-x-auto">
        <ul className="flex gap-3 text-sm">
          {[
            { href: "#standards", label: "Our Standards" },
            { href: "#ingredients", label: "Ingredients We Use" },
            { href: "#avoid", label: "What We Avoid" },
            { href: "#allergens", label: "Allergens & Labels" },
            { href: "#faq", label: "FAQs" },
          ].map((i) => (
            <li key={i.href}>
              <a href={i.href} className="badge hover:bg-gray-50">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* STANDARDS */}
      <section id="standards" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Our Standards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our standard is simple: if it doesn’t belong in a real kitchen,
                it doesn’t belong in ours. We prioritize flavor that loves you
                back — with ingredient choices and processes that support
                digestive comfort without sacrificing taste.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Transparent labels and plain-language ingredients.</li>
                <li>• Cleaner fat choices — ghee/olive oil over seed oils where possible.</li>
                <li>• Thoughtful spice levels and gentle aromatics.</li>
                <li>• Batch-tested for flavor, texture, and shelf performance.</li>
              </ul>
              <div className="mt-4">
                <Link href="/protocols" className="link">Read our prep &amp; process protocols →</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-brand-light/30 p-4">
              <img
                src="/images/standards-ingredients/checks.jpg"
                alt="Quality checks and batching"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-3 text-xs text-gray-500">Representative imagery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS WE USE */}
      <section id="ingredients" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Ingredients We Use</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Aromatics",
                desc: "Ginger, fresh herbs, curry leaves, fennel — bright, gentle flavor foundations.",
                examples: "Ginger • Coriander • Curry leaves • Fennel • Kaffir lime",
              },
              {
                title: "Bases",
                desc: "Tomato and coconut bases; leafy greens for saag/palak; slow-cooked lentils.",
                examples: "Tomato • Coconut • Spinach • Mustard greens • Black lentils",
              },
              {
                title: "Proteins",
                desc: "Chicken, fish, paneer, tofu; chickpeas and beans for vegetarian options.",
                examples: "Chicken • White fish • Paneer • Tofu • Chickpeas",
              },
              {
                title: "Fats",
                desc: "Ghee and olive oil where possible; we avoid highly processed seed oils.",
                examples: "Ghee • Olive oil • (Coconut milk in some recipes)",
              },
              {
                title: "Spices",
                desc: "Balanced blends that emphasize aroma and depth over raw heat.",
                examples: "Cumin • Coriander • Cardamom • Kashmiri chili • Turmeric",
              },
              {
                title: "Acidity",
                desc: "Tamarind, tomato, citrus — brightness without harshness.",
                examples: "Tamarind • Tomato • Lemon/Lime",
              },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl border p-5 bg-white">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                <p className="mt-3 text-xs text-gray-500">{c.examples}</p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/ingredients" className="btn btn-ghost">Explore full ingredient glossary</Link>
          </div>
        </div>
      </section>

      {/* WHAT WE AVOID */}
      <section id="avoid" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">What We Avoid</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li>• Highly processed seed oils in core recipes.</li>
              <li>• Unnecessary stabilizers or artificial flavors.</li>
              <li>• Excessive heat without balance (we prefer layered flavor).</li>
              <li>• Opaque labels — we keep it clear and specific.</li>
            </ul>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/standards-ingredients/avoid.jpg"
                alt="Clear labels and simple ingredients"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALLERGENS & LABELS */}
      <section id="allergens" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Allergens &amp; Labels</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="text-gray-700 leading-relaxed">
              <p>
                We call out common allergens on every product page. For
                sensitive eaters, look for tags like{" "}
                <span className="badge">gluten-free</span>,{" "}
                <span className="badge">dairy-free</span>,{" "}
                <span className="badge">vegetarian</span>, and{" "}
                <span className="badge">fodmap-friendly*</span>.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Always review the label before consuming. If you have medical
                dietary requirements, consult your clinician.
              </p>
            </div>

            <div className="rounded-2xl border p-5 bg-white">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { k: "Gluten-free options", v: "Yes" },
                  { k: "Dairy-free options", v: "Yes" },
                  { k: "Vegetarian options", v: "Yes" },
                  { k: "FODMAP-friendly*", v: "Some items" },
                  { k: "Seed oils", v: "Avoided where possible" },
                  { k: "RTE heat time", v: "≤ 5 min" },
                ].map((row) => (
                  <div key={row.k} className="rounded-xl border p-3">
                    <div className="text-xs text-gray-500">{row.k}</div>
                    <div className="font-semibold">{row.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            *“FODMAP-friendly” is general guidance — individual tolerance varies.
          </p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Explore our collections</h2>
              <p className="mt-2 text-gray-700">
                From ready-to-eat curries to cook-at-home bases, find the right
                fit for your routine.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/standards-ingredients/cta.jpg"
                alt="Prepared curry bowls"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}

/**
 * Expected Tailwind utilities (matching the rest of the site):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }     // adjust to your brand token
 * .bg-brand { @apply bg-amber-600; }         // adjust to your brand token
 * .bg-brand-light { @apply bg-amber-100; }   // adjust as needed
 */
