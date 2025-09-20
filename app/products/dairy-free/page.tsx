export const metadata = { title: "Dairy-free" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Dairy-free" subtitle="Dairy-free options without compromise." defaultFilters=['"dairy-free"'] />;
}