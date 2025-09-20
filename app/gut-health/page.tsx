// app/gut-health/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gut Health — Tru Flavors",
  description:
    "Simple guidance on eating for digestive comfort without sacrificing taste. See how Tru Flavors designs products with a gut-friendly approach.",
  alternates: { canonical: "/gut-health" },
  openGraph: {
    title: "Gut Health — Tru Flavors",
    description:
      "Eat well, feel well. Our practical approach to gut-friendly cooking and ready-to-heat curries.",
    url: "https://truflavors.org/gut-health",
    images: [{ url: "/images/og.png" }],
  },
};

// Optional FAQ JSON-LD
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does “gut-friendly” mean at Tru Flavors?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We focus on balanced spice profiles, cleaner fats, and clear labeling (including dairy-free and gluten-free options) to reduce common triggers while keeping flavor.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products low-FODMAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Some items are more FODMAP-friendly than others. Tolerance varies by person, so we recommend starting with smaller portions and checking labels for garlic/onion or dairy.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I prepare your meals?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ready-to-eat options typically heat in ≤ 5 minutes; ready-to-cook bases usually take 10–20 minutes depending on the protein or vegetables you add.",
      },
    },
  ],
};

export default function GutHealthPage() {
  return (
    <section className="container-max py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="link">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Gut Health</span>
      </nav>

      {/* HERO */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Eat well, <span className="text-brand">feel well</span> — without giving up flavor.
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Tru Flavors takes a practical approach to gut health: thoughtful spices, cleaner fats,
              and clear labeling — so everyday meals are both delicious and easier to digest.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Balanced spice</span>
              <span className="badge">No seed oils</span>
              <span className="badge">Gluten-free options</span>
              <span className="badge">Dairy-free options</span>
              <span className="badge">Vegetarian options</span>
              <span className="badge">≤ 5 min (RTE)</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">Shop Products</Link>
              <Link href="/standards" className="btn btn-ghost">Our Standards</Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
              <img
                src="/images/gut/hero.jpg"
                alt="Colorful, balanced curry plate designed for digestive comfort"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden md:block">
              <div className="rounded-2xl bg-white/80 backdrop-blur border px-4 py-3 shadow-sm">
                <p className="text-xs text-gray-500">Typical prep (RTE)</p>
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
            { href: "#overview", label: "Overview" },
            { href: "#eat", label: "What to Eat" },
            { href: "#limit", label: "What to Limit" },
            { href: "#approach", label: "Our Approach" },
            { href: "#faq", label: "FAQs" },
          ].map((i) => (
            <li key={i.href}>
              <a href={i.href} className="badge hover:bg-gray-50">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">A practical view of gut health</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <p className="text-gray-700 leading-relaxed">
              Digestive comfort is highly individual. Instead of promising a single “perfect” diet,
              we build products around principles that help many people: balanced spice levels,
              mindful aromatics, cleaner fats, and clear labels for common triggers.
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Moderate heat; layer flavor with herbs and gentle spices.</li>
              <li>• Prefer ghee/olive oil over seed oils in our recipes.</li>
              <li>• Clear flags for <em>dairy-free</em> and <em>gluten-free</em> options.</li>
              <li>• Practical cooking times for weekday habits.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT TO EAT */}
      <section id="eat" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">What tends to work well</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gentle aromatics",
                desc: "Ginger, green herbs, curry leaves, fennel — bright flavor with lighter impact.",
              },
              {
                title: "Comforting bases",
                desc: "Tomato-coconut blends, spinach/greens bases, slow-cooked lentils (in moderation).",
              },
              {
                title: "Lean proteins & veg",
                desc: "Chicken, fish, tofu, paneer, and non-cruciferous veg for easy pairing.",
              },
              {
                title: "Cleaner fats",
                desc: "Ghee and olive oil as primary fats in our recipes and kits.",
              },
              {
                title: "Smart heat",
                desc: "Flavor before fire; use heat as an accent, not a dare.",
              },
              {
                title: "Portion awareness",
                desc: "Start smaller, add more if comfortable — especially with new spices.",
              },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl border p-5 bg-white">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO LIMIT */}
      <section id="limit" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">What to limit (for many people)</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li>• Very hot chilies; consider milder peppers or use less.</li>
              <li>• Heavy onion/garlic loads if you’re sensitive (FODMAP-aware).</li>
              <li>• Ultra-rich dairy bases; choose coconut or dairy-free variants.</li>
              <li>• Highly processed seed oils.</li>
            </ul>
            <div className="rounded-2xl overflow-hidden border bg-brand-light/30 p-4">
              <img
                src="/images/gut/limit.jpg"
                alt="Gentle spice mise en place"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-3 text-xs text-gray-500">
                Not medical advice — always follow your clinician’s guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">How Tru Flavors designs for comfort</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Balanced spice profiles",
                desc: "Flavor-forward blends that emphasize aroma and depth over raw heat.",
              },
              {
                title: "Cleaner fat choices",
                desc: "We avoid seed oils; ghee/olive oil are our defaults where possible.",
              },
              {
                title: "Transparent labels",
                desc: "Clear callouts for dairy-free, gluten-free, and other common sensitivities.",
              },
              {
                title: "Iterative R&D",
                desc: "We refine based on customer feedback and kitchen testing.",
              },
            ].map((s) => (
              <article key={s.title} className="rounded-2xl border p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products/collections" className="btn btn-primary">Browse Collections</Link>
            <Link href="/ingredients" className="btn btn-ghost">Explore Ingredients</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="mt-6 grid gap-4">
            {[
              {
                q: "What does “gut-friendly” mean here?",
                a: "We design for balanced spices, cleaner fats, and clarity on potential triggers (e.g., dairy, gluten). It’s a practical, flavor-first approach — not a medical protocol.",
              },
              {
                q: "Are any items FODMAP-friendly?",
                a: "Some will be easier for sensitive eaters; tolerance is individual. Start with smaller portions and check labels for onion/garlic or dairy.",
              },
              {
                q: "Which product should I try first?",
                a: "Ready-to-eat Kerala Coconut Pepper or Punjabi Chana are popular gentle starts. For cooking, Saag/Palak Base or Korma DF are great weeknight options.",
              },
            ].map((f) => (
              <details key={f.q} className="rounded-xl border p-4 bg-white">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Ready for simple, good-for-you meals?</h2>
              <p className="mt-2 text-gray-700">
                Explore our ready-to-eat curries or cook with our balanced bases.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/gut/cta.jpg"
                alt="Comforting curry bowls, plated"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <p className="mt-6 text-xs text-gray-500">
        *Content is for general information only and is not a substitute for professional medical advice.
      </p>

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
 * Expected utility classes in your Tailwind setup (match About page):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }     // adjust to your brand color token
 * .bg-brand { @apply bg-amber-600; }         // adjust to your brand color token
 * .bg-brand-light { @apply bg-amber-100; }   // adjust as needed
 */
