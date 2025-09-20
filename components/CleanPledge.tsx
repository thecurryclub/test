import Section from "@/components/ui/Section";

export default function CleanPledge() {
  const items = [
    {t:"No refined flours", d:"We rely on whole or minimally processed bases."},
    {t:"No artificial colors or flavors", d:"Ingredient lists you can pronounce."},
    {t:"Mindful oils", d:"We favor olive, coconut, and avocado oil; no corn, soy, safflower, sunflower, grapeseed, or partially hydrogenated oils."},
    {t:"Short, transparent labels", d:"Real spices, herbs, vegetables—clearly labeled."},
  ];
  return (
    <Section>
      <h2 className="text-3xl font-bold">Our Clean Label Pledge</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {items.map(i => (
          <article key={i.t} className="card p-6">
            <h3 className="font-semibold">{i.t}</h3>
            <p className="mt-2 text-gray-600 text-sm">{i.d}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">We’re not offering medical advice. If you have a specific condition or sensitivity, consult a qualified professional.</p>
    </Section>
  );
}
