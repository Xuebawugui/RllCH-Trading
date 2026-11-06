import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Category } from "@/lib/categories";

type Props = {
  category: Category;
  priority?: boolean;
};

export function CategoryCard({ category, priority }: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden bg-stone-100"
    >
      <Image
        src={category.heroImage}
        alt={category.heroImageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-90">
          From {formatPrice(category.priceFrom)}
        </p>
        <h2 className="mt-2 font-serif text-2xl tracking-wide">
          {category.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-white/85">
          {category.brands.slice(0, 4).join(" · ")}
        </p>
        <span className="mt-4 inline-block text-[11px] tracking-[0.2em] uppercase underline-offset-4 group-hover:underline">
          Explore
        </span>
      </div>
    </Link>
  );
}
