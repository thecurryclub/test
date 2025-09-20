import Section from "@/components/ui/Section";

export default function TrustRow() {
  const stats = [
    {kpi:"4.9★", sub:"Avg. rating"},
    {kpi:"10–15 min", sub:"Typical cook time"},
    {kpi:"No artificials", sub:"Colors or flavors"},
  ];
  return (
    <Section className="py-8">
      <div className="grid grid-cols-3 gap-6 text-center rounded-2xl border border-gray-100 p-6">
        {stats.map(s => (
          <div key={s.sub}>
            <div className="text-2xl font-bold text-ink">{s.kpi}</div>
            <div className="text-xs text-gray-500">{s.sub}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
