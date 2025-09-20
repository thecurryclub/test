import Link from "next/link";

export default function HeroV2() {
  return (
    <section className="relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 ring-1 ring-orange-200/40">
      <div className="relative z-10 grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-orange-700/80">Flavor × Wellness</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Gut-friendly curries, <span className="text-orange-700">ready in minutes</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Chef-crafted sauces designed for calm digestion and steady energy. Lectin-aware prep, pressure-cooked
            legumes, and anti-inflammatory fats—without losing the joy of real flavor.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["No artificial colors or flavors","Olive & avocado oils","Pressure-cooked legumes"].map((chip) => (
              <span key={chip} className="rounded-full bg-white/70 px-4 py-2 text-sm text-slate-800 ring-1 ring-orange-200 backdrop-blur">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3">
            <Link href="/products" className="rounded-full bg-orange-600 px-5 py-3 text-white shadow hover:bg-orange-700">
              Shop meals
            </Link>
            <Link href="/science" className="rounded-full bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50">
              The science
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-44 w-44 rounded-full bg-orange-200/40 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-amber-100 blur-3xl" />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-orange-200 shadow-lg">
            <img
              src="/hero.jpg"
              alt="Tru Flavors: vibrant, gut-friendly curry feast"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
          </div>

          <p className="mt-3 text-xs text-slate-500">Shown for inspiration. Pair our sauces with your preferred proteins & vegetables.</p>
        </div>
      </div>

      {/* subtle corner decorations */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-32 h-64 w-64 rounded-full bg-amber-100 blur-3xl" />
    </section>
  );
}
