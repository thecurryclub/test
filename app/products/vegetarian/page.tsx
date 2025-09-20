export const metadata = { title: "Vegetarian" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Vegetarian" subtitle="Vegetarian-friendly options across regions." defaultFilters=['"vegetarian"'] />;
}