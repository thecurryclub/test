import { Montserrat } from "next/font/google";
export const runtime = "edge";
import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import StickyMiniCTA from "@/components/StickyMiniCTA";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Tru Flavors — Gut-friendly • Anti-inflammatory",
  description: "A world of flavor that loves your gut. Ready-to-heat global curry kits crafted for modern wellness.",
  metadataBase: new URL("https://truflavors.org"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tru Flavors — Gut-friendly • Anti-inflammatory",
    description: "Cook less, heal more. A world of flavor that loves your gut.",
    type: "website",
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tru Flavors — Gut-friendly • Anti-inflammatory",
    description: "Ready-to-heat global curry kits + Culture Boxes."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMiniCTA />
              <CookieConsent />
      </body>
    </html>
  );
}
