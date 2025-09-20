import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
        <div className="rounded-2xl bg-brand-light h-56 flex items-center justify-center">OG image here</div>
      </div>
    </Section>
  );
}
