import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science | Tru Flavors",
  description:
    "Tru Flavors pairs chef-crafted global curries with anti-inflammatory, gut-friendly principles. See the science behind our ingredients and methods.",
};

export default function SciencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand/10 via-orange-50 to-amber-50 mt-10">
        <div className="relative z-10 grid gap-6 px-8 py-14 md:grid-cols-2 md:gap-10 md:px-12">
          <div>
            <p className="mb-2 text-sm uppercase tracking-wider text-brand/80">The Science</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Flavor-forward meals, <span className="text-brand">grounded in science</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              We craft meals to be gentle on the gut and supportive of healthy inflammation levels—without
              compromising the joy of eating. Here’s how culinary tradition meets modern nutrition.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-slate-800 ring-1 ring-slate-200 backdrop-blur">
                No artificial colors or flavors
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-slate-800 ring-1 ring-slate-200 backdrop-blur">
                Olive & avocado oils
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-slate-800 ring-1 ring-slate-200 backdrop-blur">
                Lectin-aware prep
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <img
                src="/hero.jpg"
                alt="Colorful Indian curry feast, science-backed and gut-friendly"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Why the gut comes first */}
      <section className="mx-auto mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Why the gut comes first</h2>
          <p className="mt-3 text-slate-700">
            Your microbiome helps train immunity, manages inflammation, and influences metabolism. Diets rich in
            plant diversity, polyphenols, and fiber feed beneficial microbes and support a resilient gut barrier.
            Our menus lean into those inputs—using spice-forward recipes that naturally deliver polyphenols and
            fiber while keeping common triggers in check.<sup>1,4</sup>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Polyphenol-rich spices", "Turmeric, ginger, cumin, coriander"],
            ["Fiber that feeds microbes", "Veg-forward sauces & sides"],
            ["Healthy fats", "Extra-virgin olive & avocado oils"],
            ["Clean label", "No artificial colors or flavors"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm font-medium text-brand">{title}</p>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Tru Flavors puts the science on your plate */}
      <section className="mt-16 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 md:p-10">
        <h2 className="text-2xl font-semibold">How Tru Flavors puts the science on your plate</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            ["Pressure-cooked legumes", "We use pressure-cooking to substantially reduce heat-labile lectins and improve digestibility.<sup>2,6–8</sup>"],
            ["Spice phytonutrients", "Turmeric, ginger, and herb polyphenols help modulate inflammatory signaling and support antioxidant defenses.<sup>1,5</sup>"],
            ["Better fats", "Extra-virgin olive oil and other unsaturated fats are linked with favorable inflammatory markers and cardiometabolic health.<sup>3</sup>"],
          ].map(([title, desc], i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-brand text-sm font-medium">{title}</p>
              <p className="mt-2 text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* Balanced plate, made simple */}
      <section className="mt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Balanced plate, made simple</h2>
            <p className="mt-3 text-slate-700">
              We aim for a practical, balanced macro split that supports steady energy and satiety while keeping
              ingredients gut-friendly. Here’s an example template used across many Tru Flavors pairings. Adjust based
              on your needs with your clinician or dietitian.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>
                <div>
                  <p className="text-sm font-medium text-slate-900">40% Protein</p>
                  <p className="text-sm text-slate-700">Lean and plant-forward: chicken breast, wild fish, tofu/tempeh, or legumes that are pressure-cooked.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-amber-500"></span>
                <div>
                  <p className="text-sm font-medium text-slate-900">30% Fats</p>
                  <p className="text-sm text-slate-700">From extra-virgin olive oil, avocado, nuts (macadamia, walnuts), olives, and coconut (as appropriate).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-500"></span>
                <div>
                  <p className="text-sm font-medium text-slate-900">30% Carbs</p>
                  <p className="text-sm text-slate-700">Mostly non-starchy vegetables and fiber-rich sides (e.g., broccoli, greens, zucchini, cauliflower “rice”).</p>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              This is an illustrative split for a balanced plate. Our sauces are flexible—pair with your preferred
              proteins and veg to tailor macros while staying within anti-inflammatory principles.
            </p>
          </div>

          {/* Plate-style pie chart */}
          <div className="relative mx-auto aspect-square w-80 md:w-96">
            {/* Plate rim */}
            <div className="absolute inset-0 rounded-full bg-white shadow-xl ring-1 ring-slate-200" />
            <div className="absolute inset-4 rounded-full bg-white ring-1 ring-slate-100" />
            {/* Macro pie using conic-gradient */}
            <div
              className="absolute inset-8 rounded-full"
              style={{
                background:
                  "conic-gradient(rgb(16 185 129) 0 144deg, rgb(245 158 11) 144deg 252deg, rgb(56 189 248) 252deg 360deg)",
              }}
            />
            {/* Inner plate gloss */}
            <div className="absolute inset-[4.5rem] md:inset-20 rounded-full bg-white/15 backdrop-blur-sm" />
            {/* Center labels */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500">Example Macro Split</p>
                <p className="text-lg font-semibold text-slate-900">40 / 30 / 30</p>
                <p className="text-xs text-slate-500">Protein / Fats / Carbs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our core principles */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Our core principles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Lectin-aware preparation", "Legumes are pressure-cooked; tomato/nightshade use is minimized or specially prepared."],
            ["Metabolic steadiness", "We avoid added sugars and refined starches that can spike blood sugar."],
            ["Anti-inflammatory fats", "We cook with extra-virgin olive oil and avocado oil."],
            ["Plant diversity", "Meals emphasize vegetables, herbs, and spices for polyphenols & fiber."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-gradient-to-br from-white to-amber-50 p-5 ring-1 ring-slate-200">
              <p className="text-base font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="mt-16 pb-20">
        <h2 className="text-2xl font-semibold">References</h2>
        <ol className="mt-4 space-y-2 text-sm text-slate-600">
          <li><strong>1.</strong> Polyphenols interact with the microbiome and support gut health.</li>
          <li><strong>2.</strong> Pressure-cooking/boiling reduces antinutrients in legumes and improves digestibility.</li>
          <li><strong>3.</strong> Extra-virgin olive oil phenolics are associated with anti-inflammatory and cardiometabolic benefits.</li>
          <li><strong>4.</strong> Dietary fiber and the SCFAs it produces support the gut barrier and help regulate inflammation.</li>
          <li><strong>5.</strong> (Poly)phenols can promote beneficial microbes and inhibit pathogens, balancing the microbiota.</li>
          <li><strong>6–8.</strong> Educational resources summarizing lectin reduction by proper cooking and preparation.</li>
        </ol>
      </section>
    </main>
  );
}
