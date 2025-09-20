export const metadata = {
  title: "Gut Health 101 — Tru Flavors",
  description: "Simple, science‑aware guidance on why your gut matters, how to eat for it, and how Tru Flavors can help.",
};

const SECTIONS = [
  { id: "why-your-gut-matters", label: "Why your gut matters" },
  { id: "fiber-variety-ferments", label: "Fiber • Variety • Ferments" },
  { id: "pre-pro-postbiotics", label: "Pre/Pro/Postbiotics" },
  { id: "star-ingredients", label: "Star ingredients" },
  { id: "what-to-limit", label: "What to limit" },
  { id: "lifestyle-support", label: "Lifestyle support" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "balanced-plate", label: "Balanced plate" },
  { id: "how-tru-flavors-helps", label: "How Tru Flavors helps" },
  { id: "faq", label: "FAQ" },
];

function AnchorToc() {
  return (
    <nav aria-label="On this page" className="sticky top-24 hidden h-[calc(100vh-8rem)] w-64 shrink-0 overflow-auto pr-4 md:block">
      <ul className="space-y-1">
        {SECTIONS.map(s => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="block rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-700">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl md:text-3xl font-bold tracking-tight">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white p-5 shadow-soft">{children}</div>;
}

export default function GutHealthPage() {
  return (
    <section className="container-max mx-auto px-6 md:px-8 py-10">
            {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 md:p-12 shadow-soft">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-orange-200/30 blur-2xl" aria-hidden="true" />
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-amber-200/30 blur-2xl" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">Gut Health 101</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Build a happier gut — one simple plate at a time
        </h1>
        <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed text-slate-700">
          No scare tactics. No fads. Just practical habits that support digestion, energy, and long‑term health.
        </p>
      </div>

      <div className="mt-10 md:flex md:items-start md:gap-10">
        <AnchorToc />

        <article className="prose prose-slate max-w-none md:flex-1 prose-p:my-4 prose-p:leading-relaxed prose-li:my-1 prose-headings:tracking-tight">
          <H2 id="why-your-gut-matters">Why your gut matters</H2>
          <p>Your gut is home to trillions of microbes that help digest food, train immunity, and produce beneficial compounds. Diversity and balance tend to correlate with better outcomes, while ultra‑refined diets can work against that balance.</p>

          <div className="my-6 grid gap-4 md:grid-cols-3">
            <Card><p className="m-0 text-sm"><strong>Digestion</strong><br/>Better breakdown & absorption.</p></Card>
            <Card><p className="m-0 text-sm"><strong>Immune tone</strong><br/>A calmer, more resilient baseline.</p></Card>
            <Card><p className="m-0 text-sm"><strong>Metabolic support</strong><br/>Fiber‑rich meals for steadier energy.</p></Card>
          </div>

          <H2 id="fiber-variety-ferments">Fiber • Variety • Ferments</H2>
          <p>Patterns matter more than perfection. Aim for:</p>
          <ul>
            <li><strong>Fiber</strong>: veggies, legumes, nuts — gradual increases are kinder on digestion.</li>
            <li><strong>Variety</strong>: mix plant colors and types each week.</li>
            <li><strong>Ferments</strong>: small, regular servings (e.g., unsweetened yogurt, kefir, sauerkraut).</li>
          </ul>

          <H2 id="pre-pro-postbiotics">Pre/Pro/Postbiotics</H2>
          <ul>
            <li><strong>Prebiotics</strong>: fibers that feed microbes (onion, garlic, chicory, asparagus, green banana flour).</li>
            <li><strong>Probiotics</strong>: live cultures from fermented foods.</li>
            <li><strong>Postbiotics</strong>: beneficial end‑products like short‑chain fatty acids (SCFAs), supported by fiber‑rich meals.</li>
          </ul>

          <H2 id="star-ingredients">Star ingredients</H2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card><p className="m-0 text-sm"><strong>Olive oil</strong> over seed oils for everyday cooking.</p></Card>
            <Card><p className="m-0 text-sm"><strong>Legumes & lentils</strong> as weekly staples.</p></Card>
            <Card><p className="m-0 text-sm"><strong>Leafy greens & herbs</strong> for polyphenols and micronutrients.</p></Card>
            <Card><p className="m-0 text-sm"><strong>Spices</strong> like turmeric, cumin, ginger, coriander.</p></Card>
          </div>

          <H2 id="what-to-limit">What to limit</H2>
          <ul>
            <li>Excess added sugars & refined flours.</li>
            <li>Highly processed foods with long additive lists.</li>
            <li>Frequent deep‑fried meals.</li>
          </ul>

          <H2 id="lifestyle-support">Lifestyle support</H2>
          <ul>
            <li><strong>Sleep</strong>: aim for consistent timing and 7–9 hours.</li>
            <li><strong>Movement</strong>: gentle daily activity; add resistance work 2–3× weekly.</li>
            <li><strong>Stress</strong>: simple breathwork, walks, sunlight, and time with people you like.</li>
          </ul>

          <H2 id="troubleshooting">Troubleshooting</H2>
          <p>New to fiber or legumes? Start small, go slow, and hydrate. If you have known intolerances or medical conditions, check with your clinician for personalized advice.</p>

          <H2 id="balanced-plate">Balanced plate</H2>
          <div className="rounded-2xl border p-5 bg-white shadow-soft not-prose">
            <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
              <li>Half plate colorful veg & greens</li>
              <li>Quarter plate protein (fish, eggs, tofu, legumes, or poultry)</li>
              <li>Quarter plate smart carbs (beans/lentils, root veg, or modest whole grains)</li>
              <li>Olive oil + herbs + spices</li>
            </ol>
          </div>

          <H2 id="how-tru-flavors-helps">How Tru Flavors helps</H2>
          <p>We craft <em>ready‑to‑heat</em> meals and <em>cook‑at‑home</em> bases that emphasize plants, olive oil, and spice‑led flavor — making it easier to build a gut‑friendly plate in minutes.</p>
          <ul>
            <li>Options aligned with gluten‑free, dairy‑free, and lectin‑light preferences.</li>
            <li>Pressure‑cooked and sealed for freshness; no artificial flavors or colors.</li>
            <li>Clear labels and simple instructions.</li>
          </ul>

          <H2 id="faq">FAQ</H2>
          <details className="rounded-xl border p-4 bg-white shadow-soft">
            <summary className="cursor-pointer font-medium">Are your meals suitable for a low‑FODMAP approach?</summary>
            <div className="mt-2 text-sm text-slate-700">Some products are gentler by design; always check the ingredients list and start with small portions to gauge your response.</div>
          </details>
          <details className="mt-3 rounded-xl border p-4 bg-white shadow-soft">
            <summary className="cursor-pointer font-medium">Do you use seed oils?</summary>
            <div className="mt-2 text-sm text-slate-700">We focus on olive oil‑forward recipes. For any products that use other oils, we clearly state them on the label.</div>
          </details>
          <details className="mt-3 rounded-xl border p-4 bg-white shadow-soft">
            <summary className="cursor-pointer font-medium">How do I start if I’m new to fiber?</summary>
            <div className="mt-2 text-sm text-slate-700">Increase slowly, drink water, and pair with cooked vegetables, soups, and stews. Adjust to your comfort.</div>
          </details>
        </article>
      </div>
    </section>
  );
}
