// data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  time: "≤ 5 min" | "10–20 min" | "20–30 min";
  heat: "mild" | "medium" | "hot";
  diet?: Array<"vegetarian" | "gluten-free" | "dairy-free">;
  summary: string;
  steps: string[];
  tips?: string;
  tags?: string[];
  image?: string; // can be external or local
  basedOn?: { label: string; href: string };
};

export const recipes: Recipe[] = [
  {
    id: "kerala-coconut-fish",
    title: "Kerala Coconut Fish",
    time: "10–20 min",
    heat: "mild",
    diet: ["gluten-free", "dairy-free"],
    summary:
      "Coastal-style fish curry with curry leaves and coconut — bright, fragrant, and weeknight-fast.",
    steps: [
      "Sauté aromatics (optional) in a little ghee/olive oil.",
      "Add Keralan Coconut base; bring to a gentle simmer.",
      "Add fish pieces; simmer 6–8 min until just cooked.",
      "Finish with curry leaves and a squeeze of lime.",
    ],
    tips: "Swap fish for prawns. Add a pinch of fennel for sweetness.",
    tags: ["seafood", "south-indian", "coconut"],
    image: "/images/recipes/kerala-coconut-fish.jpg",
    basedOn: {
      label: "Keralan Coconut Curry Kit",
      href: "https://cheflessrestaurant.com/products/keralan-coconut-curry-kit",
    },
  },
  {
    id: "palak-paneer",
    title: "Palak Paneer (Spinach Paneer)",
    time: "10–20 min",
    heat: "mild",
    diet: ["vegetarian", "gluten-free"],
    summary:
      "Silky spinach sauce with golden paneer cubes — comforting and balanced.",
    steps: [
      "Pan-fry paneer cubes until lightly golden; set aside.",
      "Warm Palak base in a pan; loosen with a splash of water if needed.",
      "Add paneer; simmer 3–4 min to coat.",
      "Finish with lemon and a touch of garam masala.",
    ],
    tags: ["north-indian", "greens", "paneer"],
    image: "/images/recipes/palak-paneer.jpg",
    basedOn: {
      label: "Palak (Spinach) Curry Kit",
      href: "https://cheflessrestaurant.com/products/palak-spinach-curry-kit",
    },
  },
  {
    id: "butter-masala-chicken",
    title: "Butter Masala Chicken",
    time: "10–20 min",
    heat: "mild",
    diet: ["gluten-free"],
    summary:
      "Classic buttery tomato masala; crowd-pleasing and great with naan or rice.",
    steps: [
      "Brown chicken briefly in a little ghee; season lightly.",
      "Add Butter Masala base; simmer 8–10 min until cooked.",
      "Optional: swirl a spoon of cream or yogurt before serving.",
    ],
    tips: "For dairy-free, use coconut cream; garnish with kasuri methi.",
    tags: ["north-indian", "tomato", "family-favorite"],
    image: "/images/recipes/butter-masala-chicken.jpg",
    basedOn: {
      label: "Butter Masala Curry Kit",
      href: "https://cheflessrestaurant.com/products/butter-masala-curry-kit",
    },
  },
  {
    id: "rich-malai-paneer",
    title: "Rich Malai Paneer",
    time: "10–20 min",
    heat: "mild",
    diet: ["vegetarian", "gluten-free"],
    summary:
      "Silky, cream-forward malai sauce with soft paneer; indulgent yet fast.",
    steps: [
      "Warm Malai base; add a splash of water to loosen.",
      "Add paneer; simmer 4–5 min.",
      "Finish with crushed cardamom and fresh coriander.",
    ],
    tags: ["creamy", "paneer", "comfort"],
    image: "/images/recipes/malai-paneer.jpg",
    basedOn: {
      label: "Rich Malai Curry Kit",
      href: "https://cheflessrestaurant.com/products/rich-malai-curry-kit",
    },
  },
  {
    id: "rogan-josh-lamb",
    title: "Rogan Josh Lamb",
    time: "20–30 min",
    heat: "medium",
    diet: ["gluten-free"],
    summary:
      "Hearty Kashmiri-style curry with warming spice — perfect with lamb or mushrooms.",
    steps: [
      "Brown lamb pieces; drain excess fat.",
      "Add Rogan Josh base + splash of water; simmer 18–22 min until tender.",
      "Adjust seasoning; rest 2 minutes before serving.",
    ],
    tags: ["kashmiri", "hearty", "winter"],
    image: "/images/recipes/rogan-josh-lamb.jpg",
    basedOn: {
      label: "Rogan Josh Curry Kit",
      href: "https://cheflessrestaurant.com/products/rogan-josh-curry-kit",
    },
  },
  {
    id: "delicate-korma-veg",
    title: "Delicate Korma Veg",
    time: "10–20 min",
    heat: "mild",
    diet: ["vegetarian", "gluten-free"],
    summary:
      "Gentle coconut-cashew korma with seasonal vegetables — family friendly.",
    steps: [
      "Sauté mixed veg until just tender.",
      "Add Korma base; simmer 6–8 min.",
      "Finish with toasted cashews and coriander.",
    ],
    tags: ["korma", "coconut", "family"],
    image: "/images/recipes/korma-veg.jpg",
    basedOn: {
      label: "Delicate Korma Curry Kit",
      href: "https://cheflessrestaurant.com/products/delicate-korma-curry-kit",
    },
  },
];
