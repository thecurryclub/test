// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import BadgesMarquee from "@/components/home/BadgesMarquee";
import BestSellers from "@/components/home/BestSellers";
import PressStrip from "@/components/home/PressStrip";
import EvidenceRow from "@/components/home/EvidenceRow";
import Guarantee from "@/components/home/Guarantee";
import StickyCTA from "@/components/home/StickyCTA";

// Optional: if you have products data available for featured grid
import { products } from "@/data/products"; // adjust path if different

export const revalidate = 3600; // Revalidate homepage hourly (ISR)

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

export default function Home() {
  const featured = (products || []).slice(0, 6); // pick any logic you like (e.g., filter by tag 'featured')

  return (
    <main>
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden">
        {/* Full-bleed */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="relative min-h-[60vh] md:min-h-[72vh]">
            {/* Background image (decorative) */}
            <div className="absolute inset-0">
              <Image
                src="/hero.jpg" // keep your existing public asset if you prefer
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
              <div className="mx-auto max-w-3xl rounded-[28px] bg-white/85 p-6 shadow-xl ring-1 ring-brand/30 backdrop-blur md:p-10">
                <div className="mb-3">
                  <span className="badge">Chef-crafted • Clean label</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Chef-crafted curry kits that{" "}
                  <span className="text-brand">love your gut.</span>
                </h1>

                <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  Big flavor, minimal effort — most meals ready in ≤ 5 minutes.
                  No artificial colors or flavors.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/products" className="btn btn-primary">
                    Shop Products
                  </Link>
                  <Link href="/subscribe" className="btn btn-ghost">
                    Subscribe — Culture Box
                  </Link>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  No seed oils • Gluten-free options • Dairy-free options • FODMAP-friendly*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS CHIPS */}
      <section className="container-max mt-6">
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
            {/* typedRoutes note:
               If you add a query link, use UrlObject form, e.g.:
               <Link href={{ pathname: "/products", query: { collection: "new-arrivals" } }} className="badge hover:bg-gray-50">New Arrivals</Link>
            */}
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE / EXISTING STRIPS */}
      <BadgesMarquee />

      {/* FEATURED / NEW & NOTEWORTHY */}
      <section className="container-max py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">New &amp; Noteworthy</h2>
          <Link href="/products" className="link">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p: any) => {
            const img = p?.image || "/images/placeholder.svg";
            // typedRoutes-safe dynamic route for /products/[id]
            const productHref = { pathname: "/products/[id]", query: { id: String(p?.id) } };

            return (
              <article
                key={p?.id}
                className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow"
              >
                <Link href={productHref}>
                  <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={p?.name || "Product"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold leading-tight">
                    <Link href={productHref} className="hover:underline">
                      {p?.name || "Product"}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {currency(p?.price)}
                  </p>
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

      {/* EXISTING HOME SECTIONS (unchanged) */}
      <BestSellers />
      <PressStrip />
      <EvidenceRow />
      <Guarantee />

      {/* Sticky CTA */}
      <StickyCTA />

      {/* JSON-LD (optional; keep if you don’t already add in layout) */}
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
 * This page relies on your shared utilities:
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }
 * .bg-brand-light { @apply bg-amber-100; }
 * .hover:shadow-soft { box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
 */
