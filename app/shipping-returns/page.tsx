import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns — Tru Flavors",
  description:
    "Dispatch times, delivery windows, returns, and refunds for Tru Flavors orders.",
  alternates: { canonical: "/shipping-returns" },
  openGraph: {
    title: "Shipping & Returns — Tru Flavors",
    description:
      "Information about shipping, delivery, returns, and refunds.",
    url: "https://truflavors.org/shipping-returns",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10 prose">
      <h1>Shipping &amp; Returns</h1>

      <h2>Shipping</h2>
      <ul>
        <li>Orders typically dispatch within 2 business days.</li>
        <li>UK delivery: 2–4 business days; international times vary.</li>
        <li>Tracking details are sent via email after dispatch.</li>
      </ul>

      <h2>Returns &amp; Refunds</h2>
      <p>
        Due to perishability, returns are accepted only for damaged/defective or
        incorrect items. Email <strong>support@truflavors.org</strong> within 48 hours.
      </p>
      <p>Approved refunds are processed to the original payment method within 7–10 business days.</p>
    </section>
  );
}
