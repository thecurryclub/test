export const metadata = { title: "Contact Us — Tru Flavors" };

export default function ContactPage() {
  return (
    <section className="container-max mx-auto px-6 md:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-slate-600">
          Questions about orders, ingredients, subscriptions, or partnerships? We’d love to help.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        {/* Left: contact blocks */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border bg-white p-6 shadow-soft">
            <h2 className="text-base font-semibold">Customer Support</h2>
            <p className="mt-2 text-sm text-slate-600">
              Mon–Fri, 9:00–17:00 (UK time). We typically respond within 1 business day.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:hello@tru-flavors.com" className="text-orange-700 hover:underline">hello@tru-flavors.com</a>
              <div>+44 (0) 0000 000000</div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Wholesale & Partnerships</h3>
            <p className="mt-2 text-sm text-slate-600">
              Interested in retail, hospitality, or corporate programs?
            </p>
            <a href="mailto:partners@tru-flavors.com" className="mt-3 inline-block text-sm font-medium text-orange-700 hover:underline">
              partners@tru-flavors.com
            </a>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Press</h3>
            <p className="mt-2 text-sm text-slate-600">For media enquiries and brand assets.</p>
            <a href="mailto:press@tru-flavors.com" className="mt-3 inline-block text-sm font-medium text-orange-700 hover:underline">
              press@tru-flavors.com
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-3">
          <form className="rounded-2xl border bg-white p-6 shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">First name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div>
                <label className="block text-sm font-medium">Last name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Subject</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-700">
              Send message
            </button>
            <p className="mt-3 text-xs text-slate-500">We’ll only use your details to respond to your query.</p>
          </form>

          {/* Optional: mini FAQ below form */}
          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-base font-semibold">Frequently asked</h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="font-medium">Where’s my order?</dt>
                <dd className="text-sm text-slate-600">Check your email for tracking. If it’s missing, contact support and we’ll resend it.</dd>
              </div>
              <div>
                <dt className="font-medium">Allergens?</dt>
                <dd className="text-sm text-slate-600">See product pages for full lists. We label dairy, gluten-free, and other key allergens.</dd>
              </div>
              <div>
                <dt className="font-medium">Subscriptions</dt>
                <dd className="text-sm text-slate-600">You can skip, pause, or cancel anytime in your account settings.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
