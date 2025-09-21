// components/home/HeroV3.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroV3() {
  return (
    <section className="relative mt-4 overflow-hidden">
      {/* Full-bleed */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative min-h-[60vh] md:min-h-[72vh]">
          {/* Background image (decorative) */}
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg" // ensure this exists in /public
              alt=""           // decorative background
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mx-auto max-w-3xl rounded-[28px] bg-white/85 p-6 shadow-xl ring-1 ring-brand/30 backdrop-blur md:p-10">
              <div className="mb-3">
                <span className="badge">Chef-crafted • Clean label</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Chef-crafted curry kits that{" "}
                <span className="text-brand">love your gut.</span>
              </h1>

              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                Big flavor, minimal effort — most meals ready in ≤ 5 minutes.
                No artificial colors or flavors.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">
                  Shop Products
                </Link>
                <Link href="/subscribe" className="btn btn-ghost">
                  Join Culture Box
                </Link>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                No seed oils • Gluten-free options • Dairy-free options • FODMAP-friendly*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
