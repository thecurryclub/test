export const metadata = { title: "Gluten-free" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Gluten-free" subtitle="Naturally gluten-free selections." defaultFilters=['"gluten-free"'] />;
}