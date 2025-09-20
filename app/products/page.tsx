import ProductsGrid from "@/components/products/ProductsGrid";
import { products } from "@/data/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="mt-2 text-gray-600">Ready in ≤ 5 minutes* (heat &amp; eat) — plus quick ready-to-cook kits crafted for joyful, gut-friendly eating.</p>
      <p className="mt-1 text-xs text-gray-500">*Heat &amp; eat items are ≤ 5 minutes; ready-to-cook kits vary.</p>
      <ProductsGrid products={products} />
    </section>
  );
}
