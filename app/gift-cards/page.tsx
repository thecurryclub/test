import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gift Cards — Tru Flavors",
  description:
    "Digital gift cards for chef-quality meals in minutes — sent instantly by email.",
  alternates: { canonical: "/gift-cards" },
  openGraph: {
    title: "Gift Cards — Tru Flavors",
    description:
      "Share Tru Flavors with friends and family via digital gift cards.",
    url: "https://truflavors.org/gift-cards",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10">
      <h1 className="text-3xl font-bold">Gift Cards</h1>
      <p className="mt-4 text-gray-600">
        Share the joy of Tru Flavors. Digital gift cards are delivered
        instantly by email and redeemable at checkout.
      </p>

      <div className="mt-8 rounded-2xl border p-6 bg-white">
        <h2 className="font-semibold">How It Works</h2>
        <ol className="mt-3 list-decimal ml-5 text-sm text-gray-700 space-y-1">
          <li>Choose a value (£25, £50, £100, or custom).</li>
          <li>Receive a unique gift code by email.</li>
          <li>Redeem online with no expiry date.</li>
        </ol>

        <h2 className="mt-6 font-semibold">Terms</h2>
        <ul className="mt-3 list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>Non-refundable; cannot be exchanged for cash.</li>
          <li>Valid on all products at truflavors.org.</li>
        </ul>

        <Link href="/products/gift-card" className="btn btn-primary mt-6">
          Buy a Gift Card
        </Link>
      </div>
    </section>
  );
}
