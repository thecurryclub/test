
export const metadata = { title: "Ingredients We Choose (and Avoid)" };
export default function Ingredients() {
  const yes = ["Whole spices & herbs","Tomato, onion, garlic (balanced options)","Coconut milk where traditional","Sea salt (no MSG added)","Simple vinegars & citrus"];
  const no = ["Artificial colors or flavors","HFCS & artificial sweeteners","Hydrogenated fats","Excess refined seed oils","Unnecessary gums"];
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">Ingredients We Choose (and Avoid)</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="card p-6"><h2 className="font-semibold">We Love</h2><ul className="mt-4 list-disc list-inside text-gray-700">{yes.map(i=> <li key={i}>{i}</li>)}</ul></div>
        <div className="card p-6"><h2 className="font-semibold">We Skip</h2><ul className="mt-4 list-disc list-inside text-gray-700">{no.map(i=> <li key={i}>{i}</li>)}</ul></div>
      </div>
    </section>
  );
}
