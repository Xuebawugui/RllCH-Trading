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
    name: "Huppe Puffer Jacket",
    price: 149.99,
    category: "luxury-fashion",
    image: "/products/moncler-huppe-puffer.jpg",
    imageAlt: "Moncler Huppe shiny black puffer jacket",
  },
  {
    id: "nike-tech-fleece",
    brand: "Nike",
    name: "Tech Fleece — Black / Grey / Dark Blue",
    price: 99.99,
    category: "sportswear-sneakers",
    image: "/products/nike-tech-fleece-black.jpg",
    imageAlt: "Nike Tech Fleece tracksuit in black",
    gallery: [
      "/products/nike-tech-fleece-black.jpg",
      "/products/nike-tech-fleece-grey.jpg",
    ],
  },
  {
    id: "prada-cup",
    brand: "Prada",
    name: "America's Cup Sneaker",
    price: 139.99,
    category: "shoes-accessories",
    image: "/products/prada-cup.jpg",
    imageAlt: "Prada Cup navy and silver sneakers",
  },
  {
    id: "lv-get-ready-cap",
    brand: "Louis Vuitton",
    name: "Get Ready Limited Edition Cap",
    price: 79.99,
    category: "bags-leather",
    image: "/products/lv-get-ready-cap.jpg",
    imageAlt: "Louis Vuitton Get Ready monogram cap",
  },
  {
    id: "moncler-beanie",
    brand: "Moncler",
    name: "Logo Beanie",
    price: 59.99,
    category: "luxury-fashion",
    image: "/products/moncler-beanie.jpg",
    imageAlt: "Black Moncler ribbed beanie",
  },
  {
    id: "canada-goose-jacket",
    brand: "Canada Goose",
    name: "Hooded Puffer Jacket",
    price: 129.99,
    category: "luxury-fashion",
    image: "/products/canada-goose-jacket.jpg",
    imageAlt: "Black Canada Goose parka with fur hood",
  },
  {
    id: "columbia-windbreaker",
    brand: "Columbia",
    name: "Colour-block Windbreaker",
    price: 74.99,
    category: "sportswear-sneakers",
    image: "/products/columbia-windbreaker.jpg",
    imageAlt: "Columbia pink and red windbreaker jacket",
  },
  {
    id: "bottega-veneta-orbit",
    brand: "Bottega Veneta",
    name: "Orbit Sneaker",
    price: 139.99,
    category: "shoes-accessories",
    image: "/products/bottega-veneta-orbit.jpg",
    imageAlt: "Bottega Veneta Orbit silver mesh sneaker",
  },
  {
    id: "nike-phenom-elite",
    brand: "Nike",
    name: "Phenom Élite Pants",
    price: 79.99,
    category: "sportswear-sneakers",
    image: "/products/nike-phenom-elite.jpg",
    imageAlt: "Black Nike Phenom Élite training pants",
  },
];

export function inventoryForCategory(slug: CategorySlug): InventoryItem[] {
  return inventory.filter((item) => item.category === slug);
}
