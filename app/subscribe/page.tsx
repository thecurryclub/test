import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

function getFormAction() {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (id) return `https://formspree.io/f/${id}`;
  return "mailto:hello@truflavors.org";
}

const sample = [
  {name:"Kerala Coconut Pepper", desc:"Creamy, peppery, aromatic", time:"≤ 5 min"},
  {name:"Goan Tamarind Fish", desc:"Bright, tangy, coastal", time:"≤ 5 min"},
  {name:"Punjabi Chana", desc:"Hearty, protein-forward", time:"≤ 5 min"},
];

export const metadata = {
  title: "The Culture Box",
  openGraph: {
    title: "The Culture Box",
    images: [
      {
        url: "/og/culture-box.png", // place this file in /public/og/
        width: 1200,
        height: 630,
        alt: "Tru Flavors – The Culture Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/culture-box.png"],
  },
};

export default function Subscribe() {
  const action = getFormAction();
  return (
    <main>
      <Section className="pt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Monthly curation</span>
            <h1 className="mt-3 text-4xl font-bold">The Culture Box</h1>
            <p className="mt-4 text-gray-600">A new regional theme each month — chef-crafted curry kits, designed for joyful, gut-friendly eating. Flexible; skip or pause anytime.</p>
            <form className="mt-6 flex flex-wrap gap-3" action={action} method="POST">
              <input className="border rounded-xl px-3 py-2" name="email" type="email" placeholder="Email address" required/>
              <Button type="submit">Join the waitlist</Button>
            </form>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-brand-light h-64 md:h-80">
  <Image
    src="/og/culture-box.png"
    alt="Tru Flavors Culture Box – monthly curated curry kits"
    fill
    sizes="(min-width: 768px) 50vw, 100vw"
    style={{ objectFit: "cover" }}
    priority
  />
</div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <article className="card p-6"><h3 className="font-semibold">1) Pick your size</h3><p className="mt-2 text-gray-600">Choose the box that fits your month (3–4 kits).</p></article>
          <article className="card p-6"><h3 className="font-semibold">2) Theme ships monthly</h3><p className="mt-2 text-gray-600">We curate a regional theme and ship to your door.</p></article>
          <article className="card p-6"><h3 className="font-semibold">3) Cook in ≤ 5 minutes</h3><p className="mt-2 text-gray-600">Heat &amp; eat options for ultra-busy days; ready-to-cook kits land dinner fast.</p></article>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">This month’s sample</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {sample.map(s => (
            <article key={s.name} className="card p-6">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.desc} • {s.time}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          <details className="card p-6"><summary className="font-semibold cursor-pointer">Can I skip or cancel?</summary><p className="mt-2 text-gray-600">Yes—skip, pause, or cancel anytime.</p></details>
          <details className="card p-6"><summary className="font-semibold cursor-pointer">Dietary options?</summary><p className="mt-2 text-gray-600">Look for tags like gluten-free, dairy-free, vegetarian, or FODMAP-friendly options.</p></details>
          <details className="card p-6"><summary className="font-semibold cursor-pointer">What’s the cook time?</summary><p className="mt-2 text-gray-600">Most heat &amp; eat items are ready in ≤ 5 minutes.</p></details>
        </div>

        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Can I skip or cancel?","acceptedAnswer":{"@type":"Answer","text":"Yes—skip, pause, or cancel anytime."}},
              {"@type":"Question","name":"Dietary options?","acceptedAnswer":{"@type":"Answer","text":"Look for tags like gluten-free, dairy-free, vegetarian, or FODMAP-friendly options."}},
              {"@type":"Question","name":"What’s the cook time?","acceptedAnswer":{"@type":"Answer","text":"Most heat & eat items are ready in ≤ 5 minutes."}}
            ]
          })}
        </script>
      </Section>
    </main>
  );
}
