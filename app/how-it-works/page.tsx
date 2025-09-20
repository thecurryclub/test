// app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import HashScroller from "@/components/HashScroller";

export const metadata: Metadata = {
  title: "How It Works — Tru Flavors",
  description:
    "From pack to plate in minutes. See our 3-step process, heating methods, and storage & shelf life guidance for Tru Flavors products.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — Tru Flavors",
    description:
      "A practical, fast, and flavorful flow: choose, heat, and plate. Explore heating tips and storage & shelf life.",
    url: "https://truflavors.org/how-it-works",
    images: [{ url: "/images/og.png" }],
  },
};

export default function HowItWorksPage() {
  // HowTo JSON-LD
  const howtoJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Tru Flavors Works",
    description:
      "From pack to plate in minutes using ready-to-eat kits or ready-to-cook bases.",
    supply: [
      { "@type": "HowToSupply", name: "Tru Flavors kit" },
      { "@type": "HowToSupply", name: "Preferred protein/vegetables (if cooking base)" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Saucepan or microwave" },
      { "@type": "HowToTool", name: "Stovetop" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Choose",
        text: "Pick Ready-to-Eat for ≤5 min heat & serve, or Ready-to-Cook base for a 10–20 min meal.",
      },
      {
        "@type": "HowToStep",
        name: "Heat or Cook",
        text: "RTE: microwave/stovetop until hot. RTC: sauté protein/veg, add base, simmer to finish.",
      },
      {
        "@type": "HowToStep",
        name: "Plate",
        text: "Garnish to taste (herbs, lemon, yogurt or dairy-free options), and serve.",
      },
    ],
  };

  return (
    <section className="container-max py-10">
      {/* Smooth-scroll if ?hash=storage etc. */}
      <HashScroller param="hash" />

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link className="link" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">How It Works</span>
      </nav>

      {/* HERO */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              From pack to plate in minutes.{" "}
              <span className="text-brand">No compromise.</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Tru Flavors keeps dinner simple: choose a kit, heat or cook,
              and plate. Ready-to-eat curries are typically ready in ≤ 5 minutes,
              while ready-to-cook bases get you a fresh, balanced meal in 10–20.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">≤ 5 min (RTE)</span>
              <span className="badge">10–20 min (RTC)</span>
              <span className="badge">No seed oils</span>
              <span className="badge">Gluten-free & dairy-free options</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
              <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
            <img
              src="/images/how-it-works/hero.jpg"
              alt="Plated curry bowls prepared in minutes"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* IN-PAGE NAV */}
      <div className="mt-8 overflow-x-auto">
        <ul className="flex gap-3 text-sm">
          {[
            { href: "#steps", label: "3-Step Process" },
            { href: "#heat", label: "Heating Methods" },
            { href: "#storage", label: "Storage & Shelf Life" },
            { href: "#faq", label: "FAQs" },
          ].map((i) => (
            <li key={i.href}>
              <a href={i.href} className="badge hover:bg-gray-50">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* 3-STEP PROCESS */}
      <section id="steps" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">The 3-Step Process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Choose",
                desc:
                  "Pick Ready-to-Eat (≤ 5 min) for heat & serve convenience, or a Ready-to-Cook base for a 10–20 minute fresh meal with your protein/veg.",
                img: "/images/how-it-works/choose.jpg",
              },
              {
                n: "02",
                title: "Heat / Cook",
                desc:
                  "RTE: microwave or stovetop until hot. RTC: sauté protein or vegetables, add base, simmer, and finish with herbs or a squeeze of citrus.",
                img: "/images/how-it-works/cook.jpg",
              },
              {
                n: "03",
                title: "Plate",
                desc:
                  "Garnish to taste. Serve with rice, flatbreads, or greens—your kitchen, your rules.",
                img: "/images/how-it-works/plate.jpg",
              },
            ].map((s) => (
              <article key={s.n} className="rounded-2xl border overflow-hidden bg-white">
                <div className="aspect-[5/3] bg-brand-light/30">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-gray-500">{s.n}</div>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products/collections" className="btn btn-primary">Browse Collections</Link>
            <Link href="/how-it-works?hash=storage" className="btn btn-ghost">Storage & Shelf Life</Link>
          </div>
        </div>
      </section>

      {/* HEATING METHODS */}
      <section id="heat" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Heating Methods</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Microwave (RTE)",
                bullets: [
                  "Transfer to a microwave-safe bowl; cover loosely.",
                  "Heat 60–120 seconds; stir; heat additional 30–60 seconds until hot.",
                  "Rest 1 minute; garnish and serve.",
                ],
              },
              {
                title: "Stovetop (RTE)",
                bullets: [
                  "Pour contents into a small saucepan.",
                  "Heat over medium, stirring occasionally, 3–5 minutes until simmering.",
                  "Adjust thickness with a splash of water if desired.",
                ],
              },
              {
                title: "Stovetop (RTC base)",
                bullets: [
                  "Sauté protein/veg in a little ghee/olive oil until lightly browned.",
                  "Add base; simmer 6–12 minutes until cooked through and coated.",
                  "Finish with herbs/citrus; season to taste.",
                ],
              },
            ].map((m) => (
              <article key={m.title} className="rounded-2xl border p-5">
                <h3 className="font-semibold">{m.title}</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-2">
                  {m.bullets.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORAGE & SHELF LIFE */}
      <section id="storage" className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Storage &amp; Shelf Life</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p><strong>Before opening:</strong> Store in a cool, dry place away from direct sunlight.</p>
              <p><strong>After opening:</strong> Refrigerate in an airtight container. Consume within 48 hours (RTE) or 3 days (RTC base) unless the label states otherwise.</p>
              <p><strong>Freezing:</strong> Most RTC bases freeze well for up to 2–3 months. Thaw overnight in the fridge and reheat gently.</p>
              <p><strong>Signs to discard:</strong> Unusual odor, bloating of pack, discoloration, or texture changes not typical for the product.</p>
              <p className="text-xs text-gray-500">Always follow the specific instructions printed on your product label; they take precedence.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-brand-light/30 p-4">
              <img
                src="/images/how-it-works/storage.jpg"
                alt="Label with storage instructions"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-3 text-xs text-gray-500">Representative imagery.</p>
            </div>
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
                q: "How long do RTE kits take to heat?",
                a: "Typically ≤ 5 minutes in a microwave or 3–5 minutes on a stovetop until hot.",
              },
              {
                q: "How long do RTC bases take to cook?",
                a: "Most meals come together in 10–20 minutes depending on your protein/veg.",
              },
              {
                q: "Can I freeze leftovers?",
                a: "Most RTC bases freeze well for 2–3 months. Thaw in the fridge and reheat gently.",
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

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Ready for simple, flavorful meals?</h2>
              <p className="mt-2 text-gray-700">
                Choose a ready-to-eat curry or cook with a balanced base tonight.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">Ready to Eat</Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">Ready to Cook</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/how-it-works/cta.jpg"
                alt="Plated Tru Flavors curry with rice"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoJsonLd) }}
      />
    </section>
  );
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
