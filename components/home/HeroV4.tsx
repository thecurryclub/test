// components/home/HeroV4.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroV4() {
  return (
    <section className="relative mt-4 overflow-hidden">
      {/* Full-bleed background */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative min-h-[60vh] md:min-h-[72vh]">
          {/* Background image (decorative) */}
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"   // ensure /public/hero.jpg exists
              alt=""             // decorative background
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Content card */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mx-auto max-w-3xl rounded-[28px] bg-white/85 p-6 shadow-xl ring-1 ring-orange-200/40 backdrop-blur md:p-10">
              {/* From HeroV2 (content/styling) */}
              <p className="mb-2 text-sm uppercase tracking-wider text-orange-700/80">
                Flavor × Wellness
              </p>

              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Gut-friendly curries,{" "}
                <span className="text-orange-700">ready in minutes</span>
              </h1>

              <p className="mt-4 text-lg text-slate-700">
                Chef-crafted sauces designed for calm digestion and steady
                energy. Lectin-aware prep, pressure-cooked legumes, and
                anti-inflammatory fats—without losing the joy of real flavor.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "No artificial colors or flavors",
                  "Olive & avocado oils",
                  "Pressure-cooked legumes",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/70 px-4 py-2 text-sm text-slate-800 ring-1 ring-orange-200 backdrop-blur"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <Link
                  href="/products"
                  className="rounded-full bg-orange-600 px-5 py-3 text-white shadow hover:bg-orange-700"
                >
                  Shop meals
                </Link>
                <Link
                  href="/science"
                  className="rounded-full bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50"
                >
                  The science
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Shown for inspiration. Pair our sauces with your preferred
                proteins &amp; vegetables.
              </p>
            </div>
          </div>

          {/* Optional soft ambient blobs */}
          <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="pointer-events-none absolute bottom-6 -right-24 h-56 w-56 rounded-full bg-amber-100/70 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
