export const metadata = { title: "Ready-to-Cook" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Ready-to-Cook" subtitle="Bases, sauces, and marinades to cook fresh." defaultFilters=['"readyToCook"'] />;
}