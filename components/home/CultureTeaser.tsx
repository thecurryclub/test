import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "The Culture Box",
  openGraph: {
    title: "The Culture Box",
    images: [
      {
        url: "/og/og.jpg", // place this file in /public/og/
        width: 1200,
        height: 630,
        alt: "Tru Flavors – The Culture Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og.jpg"],
  },
};


export default function CultureTeaser() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Monthly curation</span>
          <h2 className="mt-3 text-3xl font-bold">The Culture Box</h2>
          <p className="mt-3 text-gray-600">A new regional theme each month—3–4 kits, recipe tips, and pairing ideas. Flexible; skip or pause anytime.</p>
          <Link href="/subscribe" className="mt-6 inline-flex"><Button>Join the waitlist</Button></Link>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-brand-light h-64 md:h-80">
  <Image
    src="/og/og.jpg"
    alt="Tru Flavors Culture Box – monthly curated curry kits"
    fill
    sizes="(min-width: 768px) 50vw, 100vw"
    style={{ objectFit: "cover" }}
    priority
  />
</div>
      </div>
    </Section>
  );
}
