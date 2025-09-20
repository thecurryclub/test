import Section from "@/components/ui/Section";

const items = [
  { title: "Anti‑inflammatory‑minded", body: "Spice blends inspired by anti‑inflammatory principles—ginger, turmeric, pepper—balanced with whole ingredients." },
  { title: "Gentle on the gut", body: "Mindful oils, simple ingredient lists, and options that many find easier to digest." },
  { title: "Ready in ≤5 minutes", body: "Heat & eat options for ultra‑busy days; ready‑to‑cook kits still land dinner fast." },
];

export default function WhyItWorks() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">Why it works</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <article key={i.title} className="card p-6">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-gray-600">{i.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
