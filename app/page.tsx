// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products"; // ← adjust path if your data lives elsewhere

export const revalidate = 3600; // ISR: revalidate hourly

export const metadata: Metadata = {
  title: "Tru Flavors — Chef-level curries in ≤ 5 minutes",
  description:
    "Gut-friendly, ready-to-eat and ready-to-cook curry kits. Chef-level flavor, weeknight-fast, with transparent ingredients.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tru Flavors",
    description:
      "Chef-level curries in ≤ 5 minutes. Clean, gut-friendly, zero compromise.",
    url: "https://truflavors.org/",
    images: [{ url: "/images/og.png" }],
  },
};

function currency(amount?: number) {
  if (typeof amount !== "number") return "";
  return `£${amount.toFixed(2)}`;
}

export default function HomePage() {
  // Choose some featured products (fallback to empty array gracefully)
  const featured = (products || []).slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <section className="container-max pt-8 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Chef-level curries in ≤ 5 minutes.{" "}
              <span className="text-brand">Zero compromise.</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Gut-friendly, ready-to-eat kits and ready-to-cook bases —
              engineered for weeknight speed without giving up depth or quality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/ready-to-eat" className="btn btn-primary">
                Shop Ready-to-Eat
              </Link>
              <Link href="/products/ready-to-cook" className="btn btn-ghost">
                Shop Ready-to-Cook
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              No seed oils • Gluten-free options • Dairy-free options •
              FODMAP-friendly*
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border bg-white">
            <Image
              src="/images/home/hero.jpg"
              alt="Plated Tru Flavors curries"
              width={1600}
              height={1000}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* COLLECTIONS CHIPS */}
      <section className="container-max pb-4">
        <div className="rounded-2xl border bg-white p-4">
          <div className="flex flex-wrap gap-2">
            <Link href="/products/ready-to-eat" className="badge hover:bg-gray-50">
              Ready-to-Eat
            </Link>
            <Link href="/products/ready-to-cook" className="badge hover:bg-gray-50">
              Ready-to-Cook
            </Link>
            <Link href="/products/vegetarian" className="badge hover:bg-gray-50">
              Vegetarian
            </Link>
            <Link href="/products/gluten-free" className="badge hover:bg-gray-50">
              Gluten-free
            </Link>
            <Link href="/products/dairy-free" className="badge hover:bg-gray-50">
              Dairy-free
            </Link>
            <Link href="/products/fodmap-friendly" className="badge hover:bg-gray-50">
              FODMAP-friendly
            </Link>
            <Link href="/products/spicy" className="badge hover:bg-gray-50">
              Spicy
            </Link>
            <Link href="/products/weight-friendly" className="badge hover:bg-gray-50">
              Weight-friendly
            </Link>
            {/* If you want a query link with typedRoutes on, use UrlObject, e.g.:
            <Link
              href={{ pathname: "/products", query: { collection: "new-arrivals" } }}
              className="badge hover:bg-gray-50"
            >
              New Arrivals
            </Link>
            */}
          </div>
        </div>
      </section>

      {/* NEW & NOTEWORTHY */}
      <section className="container-max py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">New &amp; Noteworthy</h2>
          <Link href="/products" className="link">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p: any) => {
            const img = p.image || "/images/placeholder.svg";
            // typedRoutes-safe dynamic route: /products/[id]
            const productHref = { pathname: "/products/[id]", query: { id: String(p.id) } };

            return (
              <article
                key={p.id}
                className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow"
              >
                <Link href={productHref}>
                  <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold leading-tight">
                    <Link href={productHref} className="hover:underline">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{currency(p.price)}</p>
                  <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                    {p?.vegetarian && <span className="badge">Vegetarian</span>}
                    {p?.readyToEat && <span className="badge">≤ 5 min</span>}
                    {p?.tags?.includes("mild") && <span className="badge">Mild</span>}
                    {p?.tags?.includes("gluten-free") && (
                      <span className="badge">Gluten-free</span>
                    )}
                    {p?.tags?.includes("dairy-free") && (
                      <span className="badge">Dairy-free</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          {featured.length === 0 && (
            <div className="text-sm text-gray-500">
              No products yet — add some to <code>data/products.ts</code>.
            </div>
          )}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="container-max pb-10">
        <div className="rounded-3xl border bg-white p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { h: "Gut-friendly by design", p: "Balanced spice, cleaner fats, clear labels." },
              { h: "Chef-level, weeknight-fast", p: "RTE ≤ 5 min • RTC 10–20 min." },
              { h: "Transparent standards", p: "No seed oils; options for GF/DF." },
            ].map((x) => (
              <article key={x.h} className="rounded-2xl border p-5 bg-white">
                <h3 className="font-semibold">{x.h}</h3>
                <p className="mt-1 text-sm text-gray-600">{x.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPING / RETURNS SUMMARY */}
      <section className="container-max pb-10">
        <div className="rounded-3xl border bg-white p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold">Free UK delivery over £50</h4>
              <p className="text-sm text-gray-600 mt-1">
                Tracked shipping with email updates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Easy support</h4>
              <p className="text-sm text-gray-600 mt-1">
                24-hour response on order issues.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Simple returns (damaged/incorrect)</h4>
              <p className="text-sm text-gray-600 mt-1">
                See{" "}
                <Link href="/shipping-returns" className="link">
                  Shipping &amp; Returns
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container-max pb-12">
        <div className="rounded-3xl border bg-gradient-to-br from-brand/10 to-brand-light/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold">
                Ready for simple, flavorful meals?
              </h2>
              <p className="mt-2 text-gray-700">
                Choose a ready-to-eat curry or cook with a balanced base tonight.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/ready-to-eat" className="btn btn-primary">
                  Ready-to-Eat
                </Link>
                <Link href="/products/ready-to-cook" className="btn btn-ghost">
                  Ready-to-Cook
                </Link>
                <Link href="/how-it-works" className="link ml-2">
                  How it works →
                </Link>
                <Link href="/gut-health" className="link ml-2">
                  Gut health →
                </Link>
                <Link href="/standards-ingredients" className="link ml-2">
                  Standards →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border bg-white">
              <Image
                src="/images/home/cta.jpg"
                alt="Tru Flavors plated curry with rice"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          *“FODMAP-friendly” is general guidance — individual tolerance varies.
        </p>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tru Flavors",
            url: "https://truflavors.org",
            logo: "https://truflavors.org/images/logo.png",
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://truflavors.org",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://truflavors.org/search?q={query}",
              "query-input": "required name=query",
            },
          }),
        }}
      />
    </main>
  );
}

/**
 * Utilities this page expects (already used across your site):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }
 * .bg-brand-light { @apply bg-amber-100; }
 * .hover:shadow-soft { box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
 */
