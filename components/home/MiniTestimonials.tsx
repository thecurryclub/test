import Section from "@/components/ui/Section";

const quotes = [
  { q: "So much flavor in so little time.", a: "Priya" },
  { q: "Weeknight curry without the panic.", a: "James" },
  { q: "Tastes like I cooked for hours.", a: "Amara" },
];

export default function MiniTestimonials() {
  return (
    <Section>
      <div className="rounded-2xl border border-gray-100 p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t) => (
            <blockquote key={t.a} className="text-sm text-gray-700">
              “{t.q}”
              <div className="mt-1 text-xs text-gray-500">— {t.a}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
