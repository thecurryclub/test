
export const metadata = { title: "Ingredients We Choose" };

export default function StandardsIngredients() {
  return (
    <main>
      <section className="container-max py-10">
        <header className="rounded-2xl bg-orange-50 p-6 shadow-soft">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ingredients We Choose
          </h1>
          <p className="mt-2 text-slate-700">
            Our sourcing principles and production standards — together on one page.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <section id="ingredients">
            <h2 className="text-2xl md:text-3xl font-bold">Ingredient Principles</h2>
            <p className="mt-3 text-slate-700">
              We highlight what goes into our meals and what we leave out, so you know
              exactly what you’re eating.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold">We Love</h3>
                <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                  <li>Olive oil & avocado oil for everyday cooking</li>
                  <li>Legumes & lentils — pressure-cooked for digestibility</li>
                  <li>Leafy greens, herbs, and colorful veggies</li>
                  <li>Whole spices and gentle aromatics</li>
                  <li>Clean-label ingredients you can pronounce</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold">We Skip</h3>
                <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                  <li>Artificial colors and flavors</li>
                  <li>Partially hydrogenated oils</li>
                  <li>Excess added sugars in savory items</li>
                  <li>Seed oils as core cooking fats</li>
                  <li>Unnecessary gums or fillers</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="standards">
            <h2 className="text-2xl md:text-3xl font-bold">Production Standards</h2>
            <p className="mt-3 text-slate-700">
              Beyond ingredients, our production methods ensure safety, consistency,
              and nutrition at scale.
            </p>
            <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
              <li>Small-batch, pressure-cooked for safety and nutrient retention</li>
              <li>No artificial preservatives — shelf life comes from retort science</li>
              <li>Consistent flavor across every batch</li>
              <li>Tested for quality and safety before release</li>
              <li>Backed by global food-safety standards</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
