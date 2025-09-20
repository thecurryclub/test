import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

const steps = [
  {n:1, t:"Heat or sauté", d:"Heat & eat in the pouch or a pan (≤5 min), or quick sauté for ready‑to‑cook kits."},
  {n:2, t:"Simmer & season", d:"Add a splash of water if needed. Taste and adjust salt or chili to preference."},
  {n:3, t:"Finish fresh", d:"Top with herbs, lemon, or yogurt. Pair with rice or a side salad."},
];

export default function HowItWorks() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">How it works</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {steps.map(s => (
          <article key={s.n} className="card p-6">
            <div className="text-brand font-bold">{s.n.toString().padStart(2,"0")}</div>
            <h3 className="mt-2 font-semibold">{s.t}</h3>
            <p className="mt-2 text-gray-600">{s.d}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/products"><Button>Shop Products</Button></Link>
      </div>
    </Section>
  );
}
