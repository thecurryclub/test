// app/page.tsx
import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import TrustRow from "@/components/home/TrustRow";
import WhyItWorks from "@/components/home/WhyItWorks";
import HowItWorks from "@/components/home/HowItWorks";

// Demand & catalog
import BestSellers from "@/components/home/BestSellers";
import RegionalTiles from "@/components/home/RegionalTiles"; // use this; or switch to UpdateRegionalTiles if you renamed the file

import CultureTeaser from "@/components/home/CultureTeaser";

// Credibility & proof
import ImpactRow from "@/components/home/ImpactRow";
import EvidenceRow from "@/components/home/EvidenceRow";
import PressStrip from "@/components/home/PressStrip";
import MiniTestimonials from "@/components/home/MiniTestimonials";

// Risk reducers / benefits
import GoalStrip from "@/components/home/GoalStrip"; // use this; or switch to UpdateGoalStrip if you renamed the file
import Guarantee from "@/components/home/Guarantee";

// Lightweight badges + sticky CTA
import BadgesMarquee from "@/components/home/BadgesMarquee";
import StickyCTA from "@/components/home/StickyCTA";

export const revalidate = 3600;

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

export default function Page() {
  return (
    <main className="relative">
      {/* 1) Refined hero */}
      <Hero />

      {/* 2) Trust & how it works */}
      <section className="container-max mt-8">
        <TrustRow />
      </section>

      <section className="container-max mt-8">
        <WhyItWorks />
      </section>

      <section className="container-max mt-8">
        <HowItWorks />
      </section>

      {/* 3) Investor-friendly KPI row (inline) */}
      <section className="container-max mt-10">
        <KPIStrip />
      </section>

      {/* 4) Show demand and breadth */}
      <section className="container-max mt-12">
        <BestSellers />
      </section>

      <section className="container-max mt-12">
        <RegionalTiles />
      </section>

      <section className="container-max mt-12">
        <CultureTeaser />
      </section>

      {/* 5) Impact, evidence, and external validation */}
      <section className="container-max mt-12">
        <ImpactRow />
      </section>

      <section className="container-max mt-12">
        <EvidenceRow />
      </section>

      <section className="container-max mt-12">
        <PressStrip />
      </section>

      <section className="container-max mt-12">
        <MiniTestimonials />
      </section>

      {/* 6) Benefits & risk reducers */}
      <section className="container-max mt-12">
        <GoalStrip />
      </section>

      <section className="container-max mt-12">
        <Guarantee />
      </section>

      {/* 7) Lightweight credibility & sticky conversion */}
      <section className="container-max mt-8">
        <BadgesMarquee />
      </section>

      <StickyCTA />
    </main>
  );
}

/**
 * Inline KPI component (investor-friendly snapshot).
 * Replace placeholder numbers with real metrics as you get them.
 * If you wish, move this into components/home/KPIStrip.tsx later.
 */
function KPIStrip() {
  const KPIS = [
    { label: "Orders fulfilled", value: "12,540+", sub: "last 12 months" },
    { label: "Repeat purchase rate", value: "38%", sub: "cohort avg." },
    { label: "Avg. prep time", value: "≤ 5 min", sub: "RTE; RTC 10–20" },
    { label: "Retail partners", value: "120+", sub: "UK & EU" },
  ];
  return (
    <div className="rounded-3xl border bg-white p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {KPIS.map((k) => (
          <article key={k.label} className="rounded-2xl border p-5 bg-white">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">{k.value}</div>
            <div className="mt-1 text-sm text-gray-600">{k.label}</div>
            {k.sub && <div className="mt-1 text-xs text-gray-500">{k.sub}</div>}
          </article>
        ))}
      </div>

      {/* Optional tiny policy/claims strip */}
      <div className="mt-4 text-xs text-gray-500">
        “FODMAP-friendly” is general guidance — individual tolerance varies. See{" "}
        <a href="/standards-ingredients" className="link">Standards &amp; Ingredients</a>.
      </div>
    </div>
  );
}
