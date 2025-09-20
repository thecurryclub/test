// IMPORTANT: this file replaces your current product detail to add the "Why it's gentle" box.
// If you'd rather not overwrite, copy the block into your existing page at a suitable place.
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const p = products.find((x) => x.id === params.id);
  if (!p) return notFound();
  return (
    <section className="container-max py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
          {p.image && <img src={p.image} alt={p.name} className="w-full h-full object-cover" />}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{p.name}</h1>
          <p className="mt-2 text-gray-700">{p.copy}</p>
          <div className="mt-3 text-sm text-gray-600">{p.prepTime ? <>⏱ {p.prepTime} min</> : null}{p.serves ? <span> • Serves {p.serves}</span> : null}</div>

          <div className="mt-8">
            <h3 className="font-semibold">Why it’s gentle</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
              <li>Anti-inflammatory-minded spice balance</li>
              <li>Mindful use of oils</li>
              <li>No artificial colors or flavors</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">What you'll need</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">{p.needed?.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Ingredients</h3>
            <p className="mt-2 text-sm text-gray-700">{p.ingredients?.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
