import Section from "@/components/ui/Section";
import Link from "next/link";

const regions = [
  { name: "Kerala Coast", href: {pathname:"/products", query:{tag:"coastal"}}, bg: "bg-brand-light" },
  { name: "Punjabi Classics", href: {pathname:"/products", query:{tag:"punjabi"}}, bg: "bg-brand/10" },
  { name: "Goan Tamarind", href: {pathname:"/products", query:{tag:"goan"}}, bg: "bg-brand-light" },
  { name: "Thai Green", href: {pathname:"/products", query:{tag:"thai"}}, bg: "bg-brand/10" },
];

export default function RegionalTiles() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">Regional journeys</h2>
      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {regions.map(r => (
          <Link key={r.name} href={r.href} className={`card h-28 flex items-center justify-center ${r.bg} text-ink hover:opacity-90`}>
            <span className="font-semibold">{r.name}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
