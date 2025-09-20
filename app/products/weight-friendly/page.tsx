export const metadata = { title: "Weight-friendly" };
import dynamic from "next/dynamic";
const Collection = dynamic(() => import("@/components/products/Collection"), { ssr: false });

export default function Page(){
  return <Collection title="Weight-friendly" subtitle="Lighter sauces and toppings that go big on flavor." defaultFilters={['"weight-friendly"']} />;
}
