import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const keywords = [
  "Gut-friendly",
  "Anti-inflammatory-minded",
  "Weight-friendly",
  "Gentle on digestion",
  "≤ 5 minutes",
  "No artificial colors or flavors",
];

export default function Hero() {
  return (
    <Section className="pt-10 pb-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Chef-crafted • Global curry kits</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Chef-crafted curry kits that <span className="text-brand">love your gut</span>.
          </h1>
          <p className="mt-4 text-gray-700">
            Big flavor, minimal effort—most meals ready in ≤5 minutes. Anti-inflammatory-minded, with no artificial colors or flavors.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {keywords.map(k => (
              <span key={k} className="badge">{k}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products"><Button>Shop Products</Button></Link>
            <Link href="/subscribe"><Button variant="ghost">Join Culture Box</Button></Link>
          </div>
        </div>

        <div className="rounded-2xl bg-brand-light h-64 md:h-80 flex items-center justify-center overflow-hidden">
          <div className="text-center w-full h-full flex items-center justify-center">
            {process.env.NEXT_PUBLIC_HERO_VIDEO_URL ? (
              <video className="w-full h-full object-cover" src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} autoPlay loop muted playsInline />
            ) : (
              <div>
                <div className="text-6xl">🍛</div>
                <p className="mt-3 text-sm text-gray-500">5-minute heat &amp; eat • Quick sauté kits</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}