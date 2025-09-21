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

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative mt-4 overflow-hidden">
        {/* Full-bleed container */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="relative min-h-[60vh] md:min-h-[72vh]">
            {/* Background image (Next/Image for LCP) */}
            <div className="absolute inset-0">
              <Image
                src="/hero.jpg" // keep your existing public asset
                alt=""          // decorative
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
                  <span className="badge">
                    Chef-crafted • Clean label
                  </span>
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

      {/* Trust badges / marquee (kept from your build) */}
      <BadgesMarquee />

      {/* Product features & social proof sections (kept as-is) */}
      <BestSellers />
      <PressStrip />
      <EvidenceRow />
      <Guarantee />

      {/* Sticky CTA (kept) */}
      <StickyCTA />

      {/* Optional: Organization & Website JSON-LD for SEO (can remove if you add to layout) */}
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
 * This page expects your shared utilities (already used site-wide):
 * .container-max { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
 * .btn { @apply inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border; }
 * .btn-primary { @apply border-brand bg-brand text-white hover:opacity-90; }
 * .btn-ghost { @apply border-gray-300 text-gray-800 hover:bg-gray-100; }
 * .badge { @apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white; }
 * .text-brand { @apply text-amber-600; }
 * .ring-brand { @apply ring-amber-300; }
 */
