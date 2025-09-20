export const metadata = { title: "Ready-to-Eat (≤ 5 min)" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Ready-to-Eat (≤ 5 min)" subtitle="Heat & eat curries ready in ≤ 5 minutes." defaultFilters=['"readyToEat"'] />;
}