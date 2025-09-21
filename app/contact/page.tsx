// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Tru Flavors",
  description:
    "Reach Tru Flavors customer support, partnerships, and press. We typically respond within 1 business day (UK).",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Tru Flavors",
    description:
      "Questions about orders, ingredients, subscriptions, or partnerships? We’d love to help.",
    url: "https://truflavors.org/contact",
    images: [{ url: "/images/og.png" }],
  },
};

export default function ContactPage() {
  return (
    <section className="container-max mx-auto px-6 md:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-slate-600">
          Questions about orders, ingredients, subscriptions, or partnerships? We typically respond within 1 business day (UK time).
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        {/* Left: contact blocks */}
        <aside className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border bg-white p-6 shadow-soft">
            <h2 className="text-base font-semibold">Customer Support</h2>
            <p className="mt-2 text-sm text-slate-600">
              Mon–Fri, 9:00–17:00 (UK time).
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:info@truflavors.org" className="text-orange-700 hover:underline">
                info@truflavors.org
              </a>
              <div>+44 (0) 0000 000000</div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Wholesale &amp; Partnerships</h3>
            <p className="mt-2 text-sm text-slate-600">
              Interested in retail, hospitality, or corporate programs?
            </p>
            <a href="mailto:partners@truflavors.org" className="mt-3 inline-block text-sm font-medium text-orange-700 hover:underline">
              partners@truflavors.org
            </a>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Press</h3>
            <p className="mt-2 text-sm text-slate-600">For media enquiries and brand assets.</p>
            <a href="mailto:press@truflavors.org" className="mt-3 inline-block text-sm font-medium text-orange-700 hover:underline">
              press@truflavors.org
            </a>
          </div>
        </aside>

        {/* Right: form */}
        <div className="md:col-span-3">
          <ContactForm />
          {/* Optional: mini FAQ */}
          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Frequently asked</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="font-medium">Where’s my order?</dt>
                <dd className="text-sm text-slate-600">
                  Check your email for tracking. If it’s missing, contact support and we’ll resend it.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Allergens?</dt>
                <dd className="text-sm text-slate-600">
                  See product pages for full lists. We label dairy, gluten-free, and other key allergens.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Subscriptions</dt>
                <dd className="text-sm text-slate-600">
                  You can skip, pause, or cancel anytime in your account settings.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
