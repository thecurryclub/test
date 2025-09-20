export const metadata = { title: "Recipes & Pairings | Tru Flavors" };

type Recipe = { slug: string; title: string; time: string; tags: string[]; summary: string; };

const RECIPES: Recipe[] = [
  { slug: "butter-chicken-naanwich", title: "Butter Chicken Naan‑wich", time: "10 min", tags: ["Chicken", "Quick"], summary: "Juicy shredded chicken tossed in our Butter Masala, folded in warm naan with pickled onions." },
  { slug: "masala-chickpea-bowl", title: "Masala Chickpea Bowl", time: "12 min", tags: ["Vegan", "High‑Fiber"], summary: "Pressure‑cooked chickpeas with Tikka Masala over brown rice, spinach, and crunchy cukes." },
  { slug: "korma-salmon", title: "Korma Salmon", time: "15 min", tags: ["Pescatarian", "Omega‑3"], summary: "Pan‑seared salmon finished in creamy Korma with lemon and herbs; serve with quinoa." },
  { slug: "paneer-veggie-skillet", title: "Paneer Veggie Skillet", time: "14 min", tags: ["Vegetarian", "30‑plants"], summary: "Crispy paneer, zucchini, peppers in Makhani; finish with yogurt and herbs." },
  { slug: "tikka-tofu-wraps", title: "Tikka Tofu Wraps", time: "12 min", tags: ["Vegan", "High‑Protein"], summary: "Crispy tofu tossed in Tikka, wrapped with greens, avocado, and slaw." },
  { slug: "saag-eggs", title: "Saag Eggs", time: "8 min", tags: ["Vegetarian", "Brunch"], summary: "Soft‑scrambled eggs with garlicky spinach; spoon over toast with chili oil." },
];

export default function RecipesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-slate-900">Recipes & Pairings</h1>
        <p className="mt-2 text-lg text-slate-700 max-w-3xl">
          5–15 minute ideas using Tru Flavors kits. Mix‑and‑match proteins and plants to hit your flavor and nutrition goals.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {RECIPES.map((r) => (
          <article key={r.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{r.title}</h2>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">{r.time}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{r.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
