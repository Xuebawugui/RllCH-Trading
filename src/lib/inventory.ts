import type { CategorySlug } from "@/lib/categories";

export type InventoryItem = {
  id: string;
  brand: string;
  name: string;
  price: number;
  category: CategorySlug;
  image: string;
  imageAlt: string;
  gallery?: string[];
};

export const inventory: InventoryItem[] = [
  {
    id: "moncler-huppe-puffer",
    brand: "Moncler",
    name: "Doudoune Huppe",
    price: 149.99,
    category: "luxury-fashion",
    image: "/products/moncler-huppe-puffer.jpg",
    imageAlt: "Doudoune Moncler Huppe noire brillante",
  },
  {
    id: "nike-tech-fleece",
    brand: "Nike",
    name: "Tech Fleece — Noir / Gris / Bleu marine",
    price: 99.99,
    category: "sportswear-sneakers",
    image: "/products/nike-tech-fleece-black.jpg",
    imageAlt: "Survêtement Nike Tech Fleece noir",
    gallery: [
      "/products/nike-tech-fleece-black.jpg",
      "/products/nike-tech-fleece-grey.jpg",
    ],
  },
  {
    id: "prada-cup",
    brand: "Prada",
    name: "Baskets America's Cup",
    price: 139.99,
    category: "shoes-accessories",
    image: "/products/prada-cup.jpg",
    imageAlt: "Baskets Prada Cup bleu marine et argent",
  },
  {
    id: "lv-get-ready-cap",
    brand: "Louis Vuitton",
    name: "Casquette Get Ready édition limitée",
    price: 79.99,
    category: "bags-leather",
    image: "/products/lv-get-ready-cap.jpg",
    imageAlt: "Casquette Louis Vuitton Get Ready monogramme",
  },
  {
    id: "moncler-beanie",
    brand: "Moncler",
    name: "Bonnet logo",
    price: 59.99,
    category: "luxury-fashion",
    image: "/products/moncler-beanie.jpg",
    imageAlt: "Bonnet côtelé Moncler noir",
  },
  {
    id: "canada-goose-jacket",
    brand: "Canada Goose",
    name: "Doudoune à capuche",
    price: 129.99,
    category: "luxury-fashion",
    image: "/products/canada-goose-jacket.jpg",
    imageAlt: "Parka Canada Goose noir à capuche",
  },
  {
    id: "columbia-windbreaker",
    brand: "Columbia",
    name: "Coupe-vent color block",
    price: 74.99,
    category: "sportswear-sneakers",
    image: "/products/columbia-windbreaker.jpg",
    imageAlt: "Coupe-vent Columbia rose et rouge",
  },
  {
    id: "bottega-veneta-orbit",
    brand: "Bottega Veneta",
    name: "Baskets Orbit",
    price: 139.99,
    category: "shoes-accessories",
    image: "/products/bottega-veneta-orbit.jpg",
    imageAlt: "Baskets Bottega Veneta Orbit argent",
  },
  {
    id: "nike-phenom-elite",
    brand: "Nike",
    name: "Pantalon Phenom Élite",
    price: 79.99,
    category: "sportswear-sneakers",
    image: "/products/nike-phenom-elite.jpg",
    imageAlt: "Pantalon Nike Phenom Élite noir",
  },
];

export function inventoryForCategory(slug: CategorySlug): InventoryItem[] {
  return inventory.filter((item) => item.category === slug);
}
