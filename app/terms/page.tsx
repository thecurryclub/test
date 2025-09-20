import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Tru Flavors",
  description: "Terms governing your use of truflavors.org and our services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions — Tru Flavors",
    description:
      "Your agreement with Tru Flavors when using this website and purchasing products.",
    url: "https://truflavors.org/terms",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10 prose">
      <h1>Terms &amp; Conditions</h1>
      <p><strong>Effective date:</strong> September 2025</p>

      <h2>Use of Website</h2>
      <p>By accessing truflavors.org, you agree to these Terms.</p>

      <h2>Products &amp; Orders</h2>
      <ul>
        <li>Descriptions and prices may change without notice.</li>
        <li>We may refuse/cancel orders at our discretion (refunds provided where applicable).</li>
      </ul>

      <h2>Payments</h2>
      <p>Payments are processed via third-party gateways. You must be authorized to use the payment method.</p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Tru Flavors is not liable for
        indirect or consequential damages arising from use of products/services.
      </p>

      <h2>Governing Law</h2>
      <p>England and Wales law applies; UK courts have exclusive jurisdiction.</p>
    </section>
  );
}
