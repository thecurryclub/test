import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Tru Flavors",
  description:
    "How Tru Flavors collects, uses, and safeguards your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Tru Flavors",
    description: "Our commitment to your privacy and data protection.",
    url: "https://truflavors.org/privacy",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10 prose">
      <h1>Privacy Policy</h1>
      <p><strong>Effective date:</strong> September 2025</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal details (name, email, address, payment info) for orders.</li>
        <li>Usage data (cookies, analytics, device/browser info).</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To fulfill orders and provide customer support.</li>
        <li>To send service updates, offers, or newsletters (opt-out available).</li>
        <li>To improve our website, products, and services.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share data with trusted
        processors (payments, logistics, analytics) solely to provide services.
      </p>

      <h2>Data Retention &amp; Security</h2>
      <p>
        We retain data as required for business or legal purposes and apply
        reasonable technical and organizational measures to protect it.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by
        emailing <strong>privacy@truflavors.org</strong>.
      </p>
    </section>
  );
}
