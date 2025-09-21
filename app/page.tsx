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
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <main className="relative">
      {/* New full-bleed hero with V2 content */}
      <HeroV4 />
      <section className="relative"><BadgesMarquee /></section>

      <section className="container-max mt-8"><TrustRow /></section>
      <section className="container-max mt-8"><WhyItWorks /></section>

      <section className="container-max mt-12"><BestSellers /></section>
      <section className="container-max mt-12"><RegionalTiles /></section>
      <section className="container-max mt-12"><CultureTeaser /></section>

      <section className="container-max mt-12"><ImpactRow /></section>
      <section className="container-max mt-12"><EvidenceRow /></section>
      <section className="container-max mt-12"><PressStrip /></section>
      <section className="container-max mt-12"><MiniTestimonials /></section>

      <section className="container-max mt-12"><GoalStrip /></section>
      <section className="container-max mt-12"><Guarantee /></section>


      <StickyCTA />
    </main>
  );
}
