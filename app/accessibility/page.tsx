import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility — Tru Flavors",
  description:
    "Our commitment to an accessible experience for all visitors.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Accessibility — Tru Flavors",
    description:
      "Accessibility principles, standards, and feedback channels for truflavors.org.",
    url: "https://truflavors.org/accessibility",
    images: [{ url: "/images/og.png" }],
  },
};

export default function Page() {
  return (
    <section className="container-max py-10 prose">
      <h1>Accessibility Statement</h1>
      <p>
        Tru Flavors is committed to providing a website accessible to the widest
        possible audience, regardless of technology or ability.
      </p>

      <h2>Our Commitment</h2>
      <ul>
        <li>Designing with WCAG 2.1 AA standards in mind.</li>
        <li>Providing text alternatives for images.</li>
        <li>Ensuring keyboard navigability and readable contrast.</li>
      </ul>

      <h2>Feedback</h2>
      <p>
        If you encounter barriers, contact <strong>accessibility@truflavors.org</strong>.
        We will make reasonable efforts to address issues promptly.
      </p>
    </section>
  );
}
