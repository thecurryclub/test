import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit — Tru Flavors",
  description:
    "Logos, photography, and boilerplate for media and partners covering Tru Flavors.",
  alternates: { canonical: "/press-kit" },
  openGraph: {
    title: "Press Kit — Tru Flavors",
    description:
      "Brand assets, product photography, and company boilerplate for editorial use.",
    url: "https://truflavors.org/press-kit",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold">Press Kit</h1>
      <p className="mt-4 text-gray-600">
        Welcome to the Tru Flavors press center. Download brand assets and find
        key information for editorial use.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border p-6 bg-white">
          <h2 className="font-semibold">Logos &amp; Brand Assets</h2>
          <p className="mt-2 text-sm text-gray-600">
            PNG + vector formats. Please do not alter, distort, or recolor.
          </p>
          <a href="/press/TruFlavors-Logo.zip" className="btn btn-primary mt-4">
            Download Logos
          </a>
        </article>

        <article className="rounded-2xl border p-6 bg-white">
          <h2 className="font-semibold">Product &amp; Lifestyle Photos</h2>
          <p className="mt-2 text-sm text-gray-600">
            High-resolution images for packaging, plated meals, and lifestyle.
          </p>
          <a href="/press/TruFlavors-Photos.zip" className="btn btn-primary mt-4">
            Download Photos
          </a>
        </article>
      </div>

      <div className="mt-12 rounded-2xl border p-6 bg-white">
        <h2 className="font-semibold">Company Boilerplate</h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Tru Flavors is a food-tech brand reinventing global curries for modern
          kitchens. With ready-to-eat kits and ready-to-cook bases, we deliver
          chef-quality meals in minutes — prioritizing wellness, sustainability,
          and flavor. Headquartered in London with global distribution.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border p-6 bg-white">
        <h2 className="font-semibold">Media Contact</h2>
        <p className="mt-2 text-sm text-gray-600">
          For press inquiries: <strong>press@truflavors.org</strong>
        </p>
      </div>
    </section>
  );
}
