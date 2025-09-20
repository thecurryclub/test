import type { MetadataRoute } from "next";
import { products } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://truflavors.org";
  const routes = ["","/science","/ingredients","/protocols","/recipes","/faq","/wholesale","/about","/subscribe","/contact","/gut-health","/book"].map(p => ({
    url: base + (p || "/"),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.6
  }));
  const productRoutes = products.map(p => ({
    url: `${base}/products/${p.id}`,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));
  return [...routes, ...productRoutes];
}
