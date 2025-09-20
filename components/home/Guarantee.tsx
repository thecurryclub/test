export default function Guarantee(){
  const items=[
    {t:"Clean label",d:"No artificial colors or flavors"},
    {t:"≤ 5 min heat & eat",d:"Weeknight-proof convenience"},
    {t:"Mindful oils",d:"Olive, coconut, avocado"}
  ];
  return (
    <section className="container-max py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i=>(
          <article key={i.t} className="card p-6">
            <h3 className="font-semibold">{i.t}</h3>
            <p className="text-gray-600 mt-2 text-sm">{i.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
