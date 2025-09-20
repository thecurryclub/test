export const metadata = { title: "FODMAP-friendly" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="FODMAP-friendly" subtitle="Gentler picks for sensitive tummies.*" defaultFilters=['"fodmap-friendly"'] />;
}