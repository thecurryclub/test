import Section from "@/components/ui/Section";

const items = [
  {icon:"🌿", title:"No artificial colors or flavors", body:"We keep ingredient lists simple and recognizable."},
  {icon:"🥥", title:"Mindful oils", body:"Balanced use of fats—thoughtful to cuisines and cooking methods."},
  {icon:"🧡", title:"Smart spice balance", body:"Ginger, turmeric, pepper and other classics, tuned for everyday."},
];

export default function ImpactRow() {
  return (
    <Section className="py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <article key={i.title} className="card p-6">
            <div className="text-2xl">{i.icon}</div>
            <h3 className="mt-2 font-semibold">{i.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{i.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}