import Section from "@/components/ui/Section";
import CleanPledge from "@/components/CleanPledge";

export const metadata = { title: "Standards | Clean Label & Ingredients" };

const bullets = [
  {h:"Aligned with common \"yes\" foods", b:"We emphasize leafy greens, cruciferous veg, herbs/spices like ginger and turmeric, and mindful fats like olive, avocado, and coconut oils."},
  {h:"What we avoid", b:"Refined flours and starches, artificial colors/flavors, partially hydrogenated oils, and common seed oils like corn, soy, safflower, sunflower, grapeseed."},
  {h:"About Dr. Steven Gundry’s lists", b:"Some items on Gundry’s \"No\" list (e.g., tomatoes, legumes, certain nuts, A1 dairy) appear in global cuisines. We label transparently so you can choose what fits your approach."},
];

export default function StandardsPage() {
  return (
    <main>
      <Section className="pt-10">
        <h1 className="text-4xl font-bold">Ingredient Standards</h1>
        <p className="mt-3 text-gray-700">We keep labels clean: simple ingredients, mindful oils, no artificial colors or flavors, and heat &amp; eat options ready in ≤ 5 minutes.</p>
      </Section>

      <CleanPledge />

      <Section>
        <h2 className="text-2xl font-semibold">Gundry-aligned, with transparency</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {bullets.map(x => (
            <article key={x.h} className="card p-6">
              <h3 className="font-semibold">{x.h}</h3>
              <p className="mt-2 text-gray-600 text-sm">{x.b}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">Reference: Dr. Steven Gundry’s publicly available “Yes” and “No” lists (see source). This content is informational, not medical advice.</p>
      </Section>
    </main>
  );
}
