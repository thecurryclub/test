import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Special Offers — Tru Flavors",
  description:
    "Seasonal promotions, bundles, and limited-time offers from Tru Flavors.",
  alternates: { canonical: "/special-offers" },
  openGraph: {
    title: "Special Offers — Tru Flavors",
    description:
      "Discover current promotions and bundles.",
    url: "https://truflavors.org/special-offers",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold">Special Offers</h1>
      <p className="mt-4 text-gray-600">
        Explore current promotions and seasonal bundles. Offers update regularly.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border p-6 bg-white">
          <h2 className="font-semibold">Intro Bundle</h2>
          <p className="mt-2 text-sm text-gray-600">
            Try 3 global curry kits at 15% off — the perfect starter pack.
          </p>
          <Link
            href={{ pathname: "/products", query: { collection: "bundles-kits" } }}
            className="btn btn-primary mt-4"
          >
            Shop Bundle
          </Link>
        </article>

        <article className="rounded-2xl border p-6 bg-white">
          <h2 className="font-semibold">Free UK Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enjoy free delivery on orders over £50 (UK only).
          </p>
          <Link href="/products" className="btn btn-primary mt-4">
            Shop Now
          </Link>
        </article>
      </div>
    </section>
  );
}
