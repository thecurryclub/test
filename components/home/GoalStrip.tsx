import Link from "next/link";
import Section from "@/components/ui/Section";

export default function GoalStrip() {
  const items = [
    {label:"Digestive comfort", href:"/products?goal=digestive"},
    {label:"Weight-friendly", href:"/products?goal=weight"},
    {label:"Under 5 minutes", href:"/products?goal=sub5"},
  ];
  return (
    <Section className="py-8">
      <div className="flex flex-wrap gap-3">
        {items.map(i => (
          <Link key={i.label} href={i.href} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-brand/10 text-sm">
            {i.label}
          </Link>
        ))}
      </div>
    </Section>
  );
}