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
  {
    id: "nike-air-max-tn",
    brand: "Nike",
    name: "Air Max Plus (TN)",
    price: 129.99,
    category: "sportswear-sneakers",
    image: "/products/nike-air-max-tn.jpg",
    imageAlt: "Nike Air Max Plus TN noir",
  },
  {
    id: "ralph-lauren-puffer",
    brand: "Ralph Lauren",
    name: "Doudoune",
    price: 149.99,
    category: "luxury-fashion",
    image: "/products/ralph-lauren-puffer.jpg",
    imageAlt: "Doudoune Ralph Lauren noire",
  },
  {
    id: "cp-company-puffer",
    brand: "C.P. Company",
    name: "Doudoune",
    price: 189.99,
    category: "luxury-fashion",
    image: "/products/cp-company-puffer.jpg",
    imageAlt: "Doudoune C.P. Company bleu marine",
  },
  {
    id: "stone-island-jacket",
    brand: "Stone Island",
    name: "Veste",
    price: 109.99,
    category: "streetwear-clothing",
    image: "/products/stone-island-jacket.jpg",
    imageAlt: "Veste Stone Island noire",
  },
  {
    id: "lv-damier-beanie",
    brand: "Louis Vuitton",
    name: "Bonnet Damier",
    price: 59.99,
    category: "shoes-accessories",
    image: "/products/lv-damier-beanie.jpg",
    imageAlt: "Bonnet Louis Vuitton Damier gris",
  },
  {
    id: "chanel-beanie",
    brand: "Chanel",
    name: "Bonnet CC",
    price: 59.99,
    category: "luxury-fashion",
    image: "/products/chanel-beanie.jpg",
    imageAlt: "Bonnet Chanel noir et blanc",
  },
  {
    id: "burberry-puffer",
    brand: "Burberry",
    name: "Doudoune",
    price: 249.99,
    category: "luxury-fashion",
    image: "/products/burberry-puffer.jpg",
    imageAlt: "Doudoune Burberry noire",
  },
  {
    id: "under-armour-cold-gear",
    brand: "Under Armour",
    name: "Veste Cold Gear",
    price: 89.99,
    category: "sportswear-sneakers",
    image: "/products/under-armour-cold-gear.jpg",
    imageAlt: "Veste Under Armour Cold Gear noire",
  },
  {
    id: "under-armour-sola",
    brand: "Under Armour",
    name: "Sola",
    price: 89.99,
    category: "sportswear-sneakers",
    image: "/products/under-armour-sola.jpg",
    imageAlt: "Baskets Under Armour Sola blanches",
  },
  {
    id: "dior-b30",
    brand: "Dior",
    name: "B30",
    price: 199.99,
    category: "shoes-accessories",
    image: "/products/dior-b30.jpg",
    imageAlt: "Baskets Dior B30 noires",
  },
];

export function inventoryForCategory(slug: CategorySlug): InventoryItem[] {
  return inventory.filter((item) => item.category === slug);
}
