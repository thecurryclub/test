import Section from "@/components/ui/Section";
export const metadata={title:"How it Works"};
export default function Page(){
  const steps=[
    {h:"Pick your favorites",p:"Choose heat & eat (≤ 5 minutes) or ready-to-cook bases."},
    {h:"Add protein/veg",p:"Make it yours: chickpeas, paneer, chicken, shrimp, mushrooms, greens."},
    {h:"Finish & plate",p:"Cilantro, lemon, pepper, yogurt, or ghee—small touches, big payoff."},
  ];
  return (<main>
    <Section className="pt-10"><h1 className="text-4xl font-bold">How it works</h1><p className="mt-3 text-gray-700">Big flavor, minimal effort. Most heat &amp; eat options are ready in ≤ 5 minutes. Clean label, mindful oils, and chef guidance on every pack.</p></Section>
    <Section><div className="grid md:grid-cols-3 gap-6">{steps.map(s=>(<article key={s.h} className="card p-6"><h3 className="font-semibold">{s.h}</h3><p className="mt-2 text-gray-600">{s.p}</p></article>))}</div></Section>
  </main>);
}