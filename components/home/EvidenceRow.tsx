export default function EvidenceRow(){
  const items=[
    {h:"Plant-forward patterns", p:"Mediterranean-style eating patterns rich in vegetables, fiber, and healthy fats are commonly associated with lower inflammatory markers (informational only)."},
    {h:"Thoughtful spices", p:"We balance classics like ginger, turmeric, and pepper for everyday meals."},
    {h:"100% natural ingredients", p:"We keep labels short: no artificial colors or flavors; mindful oils."},
  ];
  return (
    <section className="container-max py-12">
      <h2 className="text-3xl font-bold">Designed with gentle principles in mind</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(i=> (
          <article key={i.h} className="card p-6">
            <h3 className="font-semibold">{i.h}</h3>
            <p className="text-gray-600 text-sm mt-2">{i.p}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">This is informational only, not medical advice.</p>
    </section>
  );
}
