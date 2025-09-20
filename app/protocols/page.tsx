
import Link from "next/link";
export const metadata = { title: "Dietary Protocols" };
export default function Protocols() {
  const protocols = [
    {name:"Gluten-free", desc:"Kits formulated without gluten ingredients.", slug:"gluten-free"},
    {name:"Dairy-free", desc:"No dairy ingredients.", slug:"dairy-free"},
    {name:"FODMAP-friendly", desc:"Select kits mindful of FODMAP portions.", slug:"fodmap-friendly"},
    {name:"Gundry protocol followed", desc:"Aligned with key principles (no added sugar, mindful oils, no artificial additives).", slug:"gundry"}
  ];
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">Dietary Protocols</h1>
      <p className="mt-2 text-gray-600">Filter by what matters to you. See each product page for specifics.</p>
      <div className="grid mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {protocols.map(p => (<article key={p.slug} className="card p-6"><h2 className="font-semibold">{p.name}</h2><p className="mt-2 text-gray-600">{p.desc}</p><Link className="btn mt-4" href={"/#kits"}>Explore Kits</Link></article>))}
      </div>
    </section>
  );
}
