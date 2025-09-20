import BadgesMarquee from "@/components/home/BadgesMarquee";
import BestSellers from "@/components/home/BestSellers";
import PressStrip from "@/components/home/PressStrip";
import EvidenceRow from "@/components/home/EvidenceRow";
import Guarantee from "@/components/home/Guarantee";
import StickyCTA from "@/components/home/StickyCTA";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Tru Flavors — gut-friendly, ready-to-heat global curry kits</h1>
      
<section className="relative mt-4 overflow-hidden">
  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
    <div className="relative min-h-[60vh] md:min-h-[72vh]">
      <img src="/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="relative mx-auto max-w-3xl rounded-[28px] bg-white/80 p-6 shadow-xl ring-1 ring-orange-200 backdrop-blur md:p-10">
          <div className="mb-3">
            <span className="inline rounded-full bg-white px-4 py-1 text-sm font-medium text-orange-700 ring-1 ring-orange-200">
              Chef-crafted • Clean label
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Chef-crafted curry kits that <span className="text-orange-600">love your gut.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Big flavor, minimal effort—most meals ready in ≤ 5 minutes. No artificial colors or flavors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/products" className="rounded-full bg-orange-600 px-5 py-3 text-white shadow hover:bg-orange-700">Shop Products</a>
            <a href="/subscribe" className="rounded-full bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50">Subscribe — Culture Box</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<BadgesMarquee />



      <BestSellers/>
      <PressStrip/>
      <EvidenceRow/>
      <Guarantee/>
      <StickyCTA/>
    </main>
  );
}
