export const metadata = { title: "Spicy" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Spicy" subtitle="Turn up the heat with bold flavors." defaultFilters={['"spicy"']} />;
}
