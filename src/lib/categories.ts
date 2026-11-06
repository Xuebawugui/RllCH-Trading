import { inventory, inventoryForCategory } from "@/lib/inventory";

export type CategorySlug =
  | "sportswear-sneakers"
  | "streetwear-clothing"
  | "luxury-fashion"
  | "bags-leather"
  | "shoes-accessories"
  | "electronics";

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
};

export type Category = {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  priceFrom: number;
  description: string;
  brands: string[];
  heroImage: string;
  heroImageAlt: string;
  highlights: string[];
  products: Product[];
};

function toProduct(
  item: (typeof inventory)[number],
): Product {
  return {
    id: item.id,
    brand: item.brand,
    name: item.name,
    price: item.price,
    image: item.image,
    imageAlt: item.imageAlt,
  };
}

const categoryDefinitions: Omit<Category, "products">[] = [
  {
    slug: "sportswear-sneakers",
    title: "Sportswear & Sneakers",
    shortTitle: "Sportswear",
    priceFrom: 50,
    description:
      "Performance and lifestyle sneakers from leading sportswear houses — Tech Fleece, running icons, and seasonal drops sourced to your size and budget.",
    brands: [
      "Nike",
      "Nike Tech",
      "Adidas",
      "Under Armour",
      "New Balance",
      "Columbia",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
    heroImageAlt: "Red Nike sneaker on vibrant background",
    highlights: [
      "Authentic pairs from EU & global retailers",
      "Size matching and restock alerts",
      "Bundles for tracksuits and matching sets",
    ],
  },
  {
    slug: "streetwear-clothing",
    title: "Streetwear & Clothing",
    shortTitle: "Streetwear",
    priceFrom: 50,
    description:
      "Essentials, premium casualwear, and contemporary labels — from wardrobe staples to limited collaborations.",
    brands: [
      "Essentials",
      "Ralph Lauren",
      "Weekday",
      "Carhartt WIP",
      "Stüssy",
      "A.P.C.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
    heroImageAlt: "Clothing racks in a modern boutique",
    highlights: [
      "Seasonal edits for men and women",
      "Brand-specific sizing guidance",
      "Gift-ready packaging on request",
    ],
  },
  {
    slug: "luxury-fashion",
    title: "Luxury Fashion",
    shortTitle: "Luxury",
    priceFrom: 100,
    description:
      "Designer ready-to-wear from the houses you follow — outerwear, tailoring, and statement pieces sourced with care.",
    brands: [
      "Moncler",
      "Canada Goose",
      "Gucci",
      "Prada",
      "Louis Vuitton",
      "Bottega Veneta",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    heroImageAlt: "Luxury fashion editorial",
    highlights: [
      "Authentication-first sourcing",
      "Private quotes within 24–48 hours",
      "Seasonal wardrobe planning",
    ],
  },
  {
    slug: "bags-leather",
    title: "Bags & Leather Goods",
    shortTitle: "Bags",
    priceFrom: 80,
    description:
      "Handbags, wallets, cardholders, belts, and small leather goods from heritage and contemporary maisons.",
    brands: [
      "Louis Vuitton",
      "Gucci",
      "Prada",
      "Bottega Veneta",
      "Ferragamo",
      "Saint Laurent",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&q=80",
    heroImageAlt: "Luxury handbag on marble surface",
    highlights: [
      "New, pre-owned, and vintage on request",
      "Hardware and date-code checks",
      "Insurance-friendly shipping options",
    ],
  },
  {
    slug: "shoes-accessories",
    title: "Shoes & Accessories",
    shortTitle: "Accessories",
    priceFrom: 50,
    description:
      "Designer footwear, luxury sneakers, sunglasses, belts, watches, and finishing touches for every look.",
    brands: ["Prada", "Bottega Veneta", "Dior", "Louis Vuitton", "Gucci"],
    heroImage: "/products/prada-cup.jpg",
    heroImageAlt: "Prada Cup designer sneakers",
    highlights: [
      "Full size runs for designer sneakers",
      "Watch sourcing with documentation",
      "Optical-grade sunglasses available",
    ],
  },
  {
    slug: "electronics",
    title: "Electronics",
    shortTitle: "Electronics",
    priceFrom: 80,
    description:
      "Premium tech and lifestyle electronics — phones, audio, wearables, and accessories from trusted retailers.",
    brands: ["Apple", "Sony", "Bose", "Samsung", "Dyson", "Bang & Olufsen"],
    heroImage:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=80",
    heroImageAlt: "Minimal desk with laptop and accessories",
    highlights: [
      "EU warranty where available",
      "Bundle deals for travel and home office",
      "Gift wrapping for corporate orders",
    ],
  },
];

export const categories: Category[] = categoryDefinitions.map((def) => ({
  ...def,
  products: inventoryForCategory(def.slug).map(toProduct),
}));

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatProductPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
