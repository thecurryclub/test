import JsonLd from "@/components/JsonLd";
export const metadata = { title: "FAQ" };
export default function FAQ(){
  const faqs = [
    {q:"Are your meals really ready in ≤ 5 minutes?", a:"Most heat & eat pouches are hot and ready in about five minutes. Ready-to-cook bases take a little longer but are still weeknight-friendly."},
    {q:"Do you use artificial colors or flavors?", a:"No. We’re committed to Clean Label ingredients."},
    {q:"What oils do you use?", a:"Primarily olive, coconut, and avocado oils; we avoid common seed oils and any partially hydrogenated oils."},
    {q:"Is this medical food?", a:"No. Our content is informational only; please consult your clinician for personal advice."},
  ];
  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))};
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">Frequently asked questions</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {faqs.map(f => (
          <article key={f.q} className="card p-6">
            <h2 className="font-semibold">{f.q}</h2>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">Informational only. Everyone’s different—listen to your body and your care team.</p>
      <JsonLd data={schema} />
    </section>
  );
}
