// app/page.tsx
import type { Metadata } from "next";

import HeroV4 from "@/components/home/HeroV4";
import TrustRow from "@/components/home/TrustRow";
import WhyItWorks from "@/components/home/WhyItWorks";
import HowItWorks from "@/components/home/HowItWorks";
import BestSellers from "@/components/home/BestSellers";
import RegionalTiles from "@/components/home/RegionalTiles";
import CultureTeaser from "@/components/home/CultureTeaser";
import ImpactRow from "@/components/home/ImpactRow";
import EvidenceRow from "@/components/home/EvidenceRow";
import PressStrip from "@/components/home/PressStrip";
import MiniTestimonials from "@/components/home/MiniTestimonials";
import GoalStrip from "@/components/home/GoalStrip";
import Guarantee from "@/components/home/Guarantee";
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
    images: [{ url: "/public/og/og.jpg" }],
  },
};

export default function Page() {
  return (
    <main className="relative">
      {/* New full-bleed hero with V2 content */}
      <HeroV4 />
      <section className="relative"><BadgesMarquee /></section>


      <section className="container-max mt-12"><CultureTeaser /></section>
      <section className="container-max mt-12"><MiniTestimonials /></section>      
      <section className="container-max mt-12"><ImpactRow /></section>
      <section className="container-max mt-8"><TrustRow /></section>
      <section className="container-max mt-12"><BestSellers /></section>
      {/* 3) Investor-friendly KPI row (inline) */}
      <section className="container-max mt-10">
        <KPIStrip />
      </section>
      <section className="container-max mt-12"><RegionalTiles /></section>

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
