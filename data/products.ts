// data/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  category:
    | "ready-to-eat-meals"
    | "ready-to-eat-rice"
    | "ready-to-cook-gravy"
    | "ready-to-cook-paste"
    | "marinades"
    | "chutneys"
    | "sweets"
    | "asian-inspired"
    | "chinese-style"
    | "mexican-style";
  readyToEat?: boolean;
  vegetarian?: boolean;
  tags?: string[]; // e.g. ["gluten-free","dairy-free","fodmap-friendly","spicy","mild","no-seed-oils","bulk","limited"]
  description?: string;
  prepTime?: number; 
    nutrition?: {
    calories?: number; // per serving
    fat?: number;      // g per serving
    protein?: number;  // optional, for future
    carbs?: number;
    sugar?: number;
    fiber?: number;
  };
};

const PH = "/images/placeholder.svg";

export const products: Product[] = [
  // --- Ready-to-Eat (≤5 min) ---
  { id:"dal-makhani", name:"Dal Makhani", price:7.99, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"dal-tadka", name:"Dal Tadka", price:6.99, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free","mild"] },
  { id:"dal-ka-kamaal", name:"Dal Ka Kamaal", price:6.99, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"rajma-masala", name:"Rajma Masala", price:7.49, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"chana-masala", name:"Chana Masala", price:6.99, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"shahi-paneer", name:"Shahi Paneer", price:8.49, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"kadhi-pakoda", name:"Kadhi Pakoda", price:7.49, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"pav-bhaji", name:"Pav Bhaji", price:6.99, image:PH, category:"ready-to-eat-meals", readyToEat:true, vegetarian:true },

  // --- RTE Rice / Biryani ---
  { id:"veg-pulav", name:"Vegetable Pulav (RTE)", price:6.49, image:PH, category:"ready-to-eat-rice", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"hyderabadi-biryani-rte", name:"Hyderabadi Biryani (RTE)", price:8.99, image:PH, category:"ready-to-eat-rice", readyToEat:true, tags:["spicy"] },
  { id:"basmati-steamed", name:"Steamed Basmati (RTE)", price:3.99, image:PH, category:"ready-to-eat-rice", readyToEat:true, vegetarian:true, tags:["gluten-free"] },

  // --- Ready-to-Cook Gravies / Bases ---
  { id:"yellow-base-gravy", name:"Yellow Base Gravy", price:5.99, image:PH, category:"ready-to-cook-gravy", tags:["bulk"] },
  { id:"white-base-gravy", name:"White Base Gravy", price:5.99, image:PH, category:"ready-to-cook-gravy", tags:["bulk"] },
  { id:"onion-gravy", name:"Onion Gravy", price:5.99, image:PH, category:"ready-to-cook-gravy" },
  { id:"tomato-gravy", name:"Tomato Gravy", price:5.99, image:PH, category:"ready-to-cook-gravy" },
  { id:"chopped-masala", name:"Chopped Masala Base", price:6.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"onion-tomato-bhuna", name:"Onion-Tomato Bhuna Base", price:6.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"roganjosh-brown", name:"Roganjosh Brown Base", price:6.99, image:PH, category:"ready-to-cook-gravy" },
  { id:"tomato-makhni-base", name:"Tomato Makhni Base", price:6.99, image:PH, category:"ready-to-cook-gravy" },
  { id:"butter-chicken-gravy", name:"Butter Chicken Gravy", price:7.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"chicken-tikka-masala-base", name:"Chicken Tikka Masala Base", price:7.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"veg-all-purpose", name:"All-Purpose Veg Gravy", price:6.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"kadhai-gravy", name:"Kadhai Masala Gravy", price:6.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"chettinad-base", name:"Chettinad Masala Base", price:6.99, image:PH, category:"ready-to-cook-gravy", tags:["spicy"] },
  { id:"gongura-gravy", name:"Gongura (Sorrel) Gravy", price:7.49, image:PH, category:"ready-to-cook-gravy" },
  { id:"andhra-chicken-curry-base", name:"Andhra Chicken Curry Base", price:7.49, image:PH, category:"ready-to-cook-gravy", tags:["spicy"] },
  { id:"fish-pulusu-base", name:"Fish Pulusu Base", price:7.49, image:PH, category:"ready-to-cook-gravy", tags:["spicy"] },

  // --- Ready-to-Cook Pastes ---
  { id:"dum-biryani-paste", name:"Dum Biryani Paste", price:5.99, image:PH, category:"ready-to-cook-paste" },
  { id:"hyderabadi-biryani-paste", name:"Hyderabadi Biryani Paste", price:5.99, image:PH, category:"ready-to-cook-paste" },
  { id:"mirch-ka-salan-paste", name:"Mirch-ka-Salan Paste", price:5.49, image:PH, category:"ready-to-cook-paste" },
  { id:"sambar-paste", name:"Sambar Paste", price:4.99, image:PH, category:"ready-to-cook-paste", vegetarian:true },

  // --- Marinades ---
  { id:"lasooni-marinade", name:"Lasooni (Garlic) Marinade", price:4.99, image:PH, category:"marinades" },
  { id:"red-tandoori-marinade", name:"Red Tandoori Marinade", price:4.99, image:PH, category:"marinades", tags:["spicy"] },
  { id:"malai-tikka-marinade", name:"Malai Tikka Marinade", price:4.99, image:PH, category:"marinades" },
  { id:"reshmi-tikka-marinade", name:"Reshmi Tikka Marinade", price:4.99, image:PH, category:"marinades" },
  { id:"hariyali-marinade", name:"Hariyali (Herb) Marinade", price:4.99, image:PH, category:"marinades" },
  { id:"kali-mirch-marinade", name:"Kali Mirch (Black Pepper) Marinade", price:4.99, image:PH, category:"marinades" },

  // --- Chutneys & Condiments ---
  { id:"coconut-chutney-white", name:"Coconut Chutney — White", price:3.99, image:PH, category:"chutneys", vegetarian:true },
  { id:"coconut-chutney-green", name:"Coconut Chutney — Green", price:3.99, image:PH, category:"chutneys", vegetarian:true },
  { id:"red-tomato-chutney", name:"Red Tomato Chutney", price:3.49, image:PH, category:"chutneys", vegetarian:true },

  // --- Sweets ---
  { id:"moong-dal-halwa", name:"Moong Dal Halwa", price:6.99, image:PH, category:"sweets", vegetarian:true },
  { id:"carrot-halwa", name:"Carrot Halwa", price:6.99, image:PH, category:"sweets", vegetarian:true },
  { id:"gulab-jamun", name:"Gulab Jamun", price:5.99, image:PH, category:"sweets", vegetarian:true },

  // --- Asian-Inspired (RTC Bases) ---
  { id:"thai-green-base", name:"Thai-Style Green Coconut Base", price:6.99, image:PH, category:"asian-inspired", vegetarian:true, tags:["mild"] },
  { id:"thai-red-base", name:"Thai-Style Red Coconut Base", price:6.99, image:PH, category:"asian-inspired", tags:["spicy"] },
  { id:"teriyaki-glaze", name:"Teriyaki-Inspired Glaze", price:4.99, image:PH, category:"asian-inspired", tags:["no-seed-oils"] },
  { id:"sesame-ginger-stirfry", name:"Sesame-Ginger Stir-Fry Sauce", price:4.99, image:PH, category:"asian-inspired", tags:["no-seed-oils"] },
  { id:"miso-coconut-broth", name:"Miso-Coconut Broth Starter", price:5.99, image:PH, category:"asian-inspired", vegetarian:true },

  // --- Chinese-Style (RTC Bases) ---
  { id:"kung-pao-style", name:"Kung Pao-Style Base", price:5.49, image:PH, category:"chinese-style", tags:["spicy"] },
  { id:"black-bean-style", name:"Black Bean-Style Sauce", price:5.49, image:PH, category:"chinese-style" },
  { id:"chili-garlic-style", name:"Chili-Garlic Stir-Fry Base", price:5.49, image:PH, category:"chinese-style", tags:["spicy"] },
  { id:"sweet-sour-style", name:"Sweet-and-Sour-Style Sauce", price:4.99, image:PH, category:"chinese-style" },
  { id:"mapo-style-base", name:"Mapo-Style Base", price:5.49, image:PH, category:"chinese-style", tags:["spicy"] },

  // --- Mexican-Style (RTC Bases) ---
  { id:"ancho-chipotle-base", name:"Ancho-Chipotle Cooking Base", price:5.99, image:PH, category:"mexican-style", tags:["spicy"] },
  { id:"tomatillo-verde-base", name:"Tomatillo-Style Verde Base", price:5.99, image:PH, category:"mexican-style", tags:["mild"] },
  { id:"mole-inspired-base", name:"Mole-Inspired Cocoa-Chili Base", price:6.49, image:PH, category:"mexican-style" },
  { id:"adobo-marinade", name:"Adobo-Style Marinade", price:4.99, image:PH, category:"mexican-style" },
  { id:"fajita-pepper-onion", name:"Fajita-Style Pepper & Onion Base", price:5.49, image:PH, category:"mexican-style" },
];

export const ALL_CATEGORIES: { key: Product["category"]; label: string }[] = [
  { key: "ready-to-eat-meals", label: "Ready-to-Eat Meals" },
  { key: "ready-to-eat-rice", label: "RTE Rice & Biryani" },
  { key: "ready-to-cook-gravy", label: "RTC Gravies" },
  { key: "ready-to-cook-paste", label: "RTC Pastes" },
  { key: "marinades", label: "Marinades" },
  { key: "chutneys", label: "Chutneys" },
  { key: "sweets", label: "Sweets" },
  { key: "asian-inspired", label: "Asian-Inspired" },
  { key: "chinese-style", label: "Chinese-Style" },
  { key: "mexican-style", label: "Mexican-Style" },
];

export const TAGS = ["gluten-free","dairy-free","fodmap-friendly","spicy","mild","no-seed-oils","bulk","limited"] as const;
