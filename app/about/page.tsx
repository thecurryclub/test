// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Tru Flavors — Our Mission, Team & Standards",
  description:
    "Tru Flavors crafts gut-friendly, ready-to-heat global curry kits. Learn about our mission, food standards, sustainability, and the team behind the brand.",
  openGraph: {
    title: "About Tru Flavors",
    description:
      "Gut-friendly, ready-to-heat global curry kits. Discover our story, standards, and commitment to better eating.",
    url: "https://truflavors.org/about",
    images: [{ url: "/images/og.png" }],
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tru Flavors",
    url: "https://truflavors.org",
    logo: "https://truflavors.org/images/logo.png",
    sameAs: [
      "https://truflavors.org",
      // Add socials if available
      // "https://www.linkedin.com/company/tru-flavors",
      // "https://www.instagram.com/truflavors",
    ],
  };

  return (
    <section className="container-max py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link className="link" href="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">About</span>
      </nav>

      {/* HERO */}
      <header className="rounded-3xl border bg-white p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Real food. Real speed.{" "}
              <span className="text-brand">Zero compromise.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Tru Flavors crafts gut-friendly, ready-to-heat global curry kits
              that taste like they took hours—ready in minutes. We combine
              heritage recipes with modern food science and rigorous standards
              so you can eat well every day, wherever you are.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Gut-friendly</span>
              <span className="badge">≤ 5 min</span>
              <span className="badge">No seed oils</span>
              <span className="badge">Gluten-free options</span>
              <span className="badge">Dairy-free options</span>
              <span className="badge">Vegetarian options</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">Browse Products</Link>
              <Link href="/standards" className="btn btn-ghost">Our Standards</Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border bg-brand-light/40">
              <img
                src="/images/about/hero.jpg"
                alt="Chef-less curry, plated beautifully in minutes"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden md:block">
              <div className="rounded-2xl bg-white/80 backdrop-blur border px-4 py-3 shadow-sm">
                <p className="text-xs text-gray-500">Average prep time</p>
                <p className="text-lg font-semibold">≤ 5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MISSION & DIFFERENTIATION */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Make deeply satisfying, nutritionally responsible meals available to
            everyone—without a chef, long prep, or a compromise on taste.
          </p>
        </div>
        <div className="md:col-span-2 rounded-2xl border bg-white p-6">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">What makes us different</dt>
              <dd className="mt-2 text-gray-800 leading-relaxed">
                We design each kit with a “digestive-first” lens: cleaner fats,
                sensible spices, and slow-cooked flavor—engineered for speed.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Consistency by design</dt>
              <dd className="mt-2 text-gray-800 leading-relaxed">
                Chef-level results, every time. Our process standardizes
                variables so your last bite is as good as your first.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Data-backed product development</dt>
              <dd className="mt-2 text-gray-800 leading-relaxed">
                We iterate with customer feedback, supplier analytics, and
                culinary tests—shipping only when quality meets our bar.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Transparent standards</dt>
              <dd className="mt-2 text-gray-800 leading-relaxed">
                Clear ingredients. Clear claims. You’ll find our standards and
                sourcing approach documented for every product.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Our Core Values</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Honest Ingredients",
                desc: "If it doesn’t belong in a real kitchen, it doesn’t belong in ours.",
              },
              {
                title: "Digestive Wellness",
                desc: "Flavor that loves you back—balanced spices, mindful fats, and clean labels.",
              },
              {
                title: "Operational Excellence",
                desc: "Quality is a system. We codify what great tastes like and repeat it.",
              },
              {
                title: "Sustainability",
                desc: "Efficient packaging, smart batch sizes, and suppliers we know by name.",
              },
            ].map((v) => (
              <article key={v.title} className="rounded-2xl border p-5">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Milestones</h2>
          <ol className="mt-6 relative border-l pl-6">
            {[
              {
                date: "2020–2022",
                title: "Foundations & R&D",
                desc:
                  "Prototyped heat-and-eat curry kits, validated with early customers, and defined clean-label standards.",
              },
              {
                date: "2022–2024",
                title: "Brand & Product Expansion",
                desc:
                  "Launched Tru Flavors identity, expanded vegetarian and dairy-free lines, and built supply partnerships.",
              },
              {
                date: "2025+",
                title: "Scale & Distribution",
                desc:
                  "Retail pilots, hospitality bundles, and international formats geared for consistent quality at speed.",
              },
            ].map((t, i) => (
              <li key={t.title} className="mb-8 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand"></div>
                <time className="text-xs text-gray-500">{t.date}</time>
                <h3 className="text-base font-semibold mt-1">{t.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUALITY & STANDARDS STRIP */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Quality & Standards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <li>• Ingredient transparency, allergen clarity, and traceability.</li>
                <li>• Optimized spice profiles for taste and digestive comfort.</li>
                <li>• Cleaner fats—no seed oils; options for dairy-free, gluten-free.</li>
                <li>• Batch-tested consistency for flavor, texture, and shelf performance.</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Link href="/standards" className="btn btn-primary">Read our Standards</Link>
                <Link href="/ingredients" className="btn btn-ghost">Explore Ingredients</Link>
              </div>
            </div>
            <div className="rounded-2xl border bg-brand-light/30 p-4">
              <img
                src="/images/about/standards.jpg"
                alt="Quality checks and preparation process"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-3 text-xs text-gray-500">
                Representative imagery. Exact process varies by product and region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP / TEAM (lightweight) */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Leadership</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Subaash Bodappati",
                role: "Founder & CEO",
                bio:
                  "Serial entrepreneur across food-tech, hospitality, and wellness. Focused on scalable quality systems and brand trust.",
                img: "/images/team/subaash.jpg",
              },
              // Add other leaders as you wish
            ].map((m) => (
              <article key={m.name} className="rounded-2xl border p-5 bg-white">
                <div className="aspect-square overflow-hidden rounded-xl border bg-brand-light/30">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
                <p className="mt-2 text-sm text-gray-600">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold">Sustainability</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Smart Sizing", desc: "Right-sized batches reduce waste and keep flavor fresh." },
              { title: "Conscious Packaging", desc: "Efficient materials where possible; working to improve recyclability." },
              { title: "Supplier Trust", desc: "We prioritize partners who share our quality and ethics." },
              { title: "Local Where It Matters", desc: "Regionalized prep to shorten travel and improve freshness." },
            ].map((s) => (
              <article key={s.title} className="rounded-2xl border p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mt-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Let’s build better everyday eating.</h2>
              <p className="mt-2 text-gray-700">
                Explore our products or get in touch for wholesale & partnerships.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">Shop Tru Flavors</Link>
                <Link href="/wholesale" className="btn btn-ghost">Wholesale & Partnerships</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/images/about/cta.jpg"
                alt="Tru Flavors plated curry kits"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <p className="mt-6 text-xs text-gray-500">
        *“FODMAP-friendly” is general guidance—individual tolerance varies.
      </p>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/**
 * Minimal utility classes assumed in your Tailwind setup:
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }  // adjust to your brand color token
 * .bg-brand { @apply bg-amber-600; }      // adjust to your brand color token
 * .bg-brand-light { @apply bg-amber-100; } // adjust as needed
 */
