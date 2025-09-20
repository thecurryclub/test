import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  price: number;
  copy: string;
  image?: string;
  tags: string[];
  ingredients?: string[];
  allergens?: string[];
  nutrition?: { calories?: number; fat?: number; carbs?: number; protein?: number };
  prepTime?: number;
  serves?: number;
  needed?: string[];
  chefTip?: string;
  readyToCook: boolean;
  readyToEat: boolean;
  vegetarian?: boolean;
  pressureCooked?: boolean;
};

export function ProductCard({ p }: { p: Product }) {
  const img = p.image || "/images/placeholder.svg";

  return (
    <article className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow">
      <div className="block">
        <Link href={`/products/${p.id}`}>
          <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
            <img src={img} alt={p.name} className="w-full h-full object-cover" />
          </div>
        </Link>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-tight">
              <Link className="hover:underline" href={`/products/${p.id}`}>{p.name}</Link>
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">£{p.price.toFixed(2)}</p>
          </div>
          <div className="text-right">
            {p.readyToEat && <span className="badge">≤ 5 min</span>}
            {!p.readyToEat && p.readyToCook && <span className="badge">Ready to cook</span>}
          </div>
        </div>

        <p className="mt-2 text-gray-600 text-sm">{p.copy}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          {p.readyToEat && <span className="badge">≤ 5 min</span>}
          {p.pressureCooked && <span className="badge">Pressure-cooked</span>}
          {p.tags?.includes("gluten-free") && <span className="badge">Gluten-free</span>}
          {p.tags?.includes("dairy-free") && <span className="badge">Dairy-free</span>}
          {p.tags?.includes("fodmap-friendly") && <span className="badge">FODMAP-friendly*</span>}
          {p.tags?.includes("spicy") && <span className="badge">Spicy</span>}
          {p.vegetarian && <span className="badge">Vegetarian</span>}
        </div>

        <div className="mt-3 text-xs text-gray-500">
          {p.prepTime ? <>⏱ {p.prepTime} min</> : null}{p.serves ? <span> • Serves {p.serves}</span> : null}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;