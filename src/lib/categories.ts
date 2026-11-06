import { inventory, inventoryForCategory } from "@/lib/inventory";
import { site } from "@/lib/site";

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

function toProduct(item: (typeof inventory)[number]): Product {
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
    shortTitle: "Sport",
    priceFrom: 50,
    description:
      "Sneakers performance et lifestyle des grandes maisons sport — Tech Fleece, icônes running et drops saisonniers, selon votre taille et budget.",
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
    heroImageAlt: "Sneaker Nike rouge sur fond coloré",
    highlights: [
      "Paires authentiques auprès de revendeurs UE et internationaux",
      "Recherche de taille et alertes restock",
      "Ensembles survêtements et looks assortis",
    ],
  },
  {
    slug: "streetwear-clothing",
    title: "Streetwear & Vêtements",
    shortTitle: "Streetwear",
    priceFrom: 50,
    description:
      "Essentiels, casual premium et labels contemporains — du basique de garde-robe aux collaborations limitées.",
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
    heroImageAlt: "Portants de vêtements dans une boutique moderne",
    highlights: [
      "Sélections saisonnières homme et femme",
      "Conseils de taille par marque",
      "Emballage cadeau sur demande",
    ],
  },
  {
    slug: "luxury-fashion",
    title: "Mode de luxe",
    shortTitle: "Luxe",
    priceFrom: 100,
    description:
      "Prêt-à-porter designer des maisons que vous suivez — outerwear, tailoring et pièces statement, sourcées avec soin.",
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
    heroImageAlt: "Éditorial mode de luxe",
    highlights: [
      "Sourcing avec priorité à l'authenticité",
      "Devis personnalisés sous 24–48 h",
      "Accompagnement garde-robe saisonnière",
    ],
  },
  {
    slug: "bags-leather",
    title: "Sacs & Maroquinerie",
    shortTitle: "Maroquinerie",
    priceFrom: 80,
    description:
      "Sacs, portefeuilles, porte-cartes, ceintures et petite maroquinerie — maisons heritage et contemporaines.",
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
    heroImageAlt: "Sac de luxe sur marbre",
    highlights: [
      "Neuf, seconde main et vintage sur demande",
      "Contrôle hardware et date codes",
      "Options d'expédition assurées",
    ],
  },
  {
    slug: "shoes-accessories",
    title: "Chaussures & Accessoires",
    shortTitle: "Accessoires",
    priceFrom: 50,
    description:
      "Chaussures designer, sneakers de luxe, lunettes, ceintures, montres et finitions pour chaque look.",
    brands: ["Prada", "Bottega Veneta", "Dior", "Louis Vuitton", "Gucci"],
    heroImage: "/products/prada-cup.jpg",
    heroImageAlt: "Baskets Prada Cup",
    highlights: [
      "Grilles de tailles complètes pour sneakers designer",
      "Sourcing montres avec documentation",
      "Lunettes de soleil optiques disponibles",
    ],
  },
  {
    slug: "electronics",
    title: "Électronique",
    shortTitle: "Tech",
    priceFrom: 80,
    description:
      "Tech premium et électronique lifestyle — téléphones, audio, wearables et accessoires auprès de revendeurs de confiance.",
    brands: ["Apple", "Sony", "Bose", "Samsung", "Dyson", "Bang & Olufsen"],
    heroImage:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=80",
    heroImageAlt: "Bureau minimaliste avec ordinateur",
    highlights: [
      "Garantie UE lorsque disponible",
      "Offres groupées voyage et bureau",
      "Emballage cadeau pour commandes pro",
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

export function formatPrice(amount: number, currency = site.currency): string {
  return new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatProductPrice(
  amount: number,
  currency = site.currency,
): string {
  return new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
