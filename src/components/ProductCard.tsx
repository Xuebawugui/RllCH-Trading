import Image from "next/image";
import Link from "next/link";
import { formatProductPrice, type Product } from "@/lib/categories";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="group">
      <div className="relative block aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
          {product.brand}
        </p>
        <h3 className="text-sm leading-snug text-stone-900">{product.name}</h3>
        <p className="text-sm font-medium text-stone-900">
          {formatProductPrice(product.price)}
        </p>
        <Link
          href="/personal-shopping#quote-contact"
          className="inline-block pt-1 text-[11px] tracking-[0.15em] text-stone-800 uppercase underline-offset-4 hover:underline"
        >
          Nous contacter
        </Link>
      </div>
    </article>
  );
}
