import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function BestSellers(){
  const best = products.slice(0,6);
  return (
    <section className="container-max py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Best-sellers</h2>
          <p className="text-gray-600 mt-1">Weeknight-proof flavor. Most heat &amp; eat options are ready in ≤ 5 minutes.</p>
        </div>
        <Link href="/products" className="link">View all</Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {best.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
