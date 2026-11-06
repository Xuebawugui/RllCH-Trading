import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  formatPrice,
  getCategoryBySlug,
  type CategorySlug,
} from "@/lib/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <section className="relative h-[50vh] min-h-[320px] bg-stone-900">
        <Image
          src={category.heroImage}
          alt={category.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 lg:px-6">
          <p className="text-[11px] tracking-[0.3em] text-white/80 uppercase">
            From {formatPrice(category.priceFrom)}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-white lg:text-5xl">
            {category.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-stone-600">
              {category.description}
            </p>
            <ul className="mt-8 space-y-3">
              {category.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm text-stone-700 before:content-['—']"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border border-stone-200 bg-stone-50 p-6">
            <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">
              Brands we source
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.brands.map((brand) => (
                <li
                  key={brand}
                  className="border border-stone-200 bg-white px-2.5 py-1 text-xs text-stone-700"
                >
                  {brand}
                </li>
              ))}
            </ul>
            <Link
              href={`/personal-shopping?category=${category.slug as CategorySlug}`}
              className="mt-6 block w-full bg-stone-900 py-3 text-center text-[11px] tracking-[0.2em] text-white uppercase transition hover:bg-stone-700"
            >
              Request from this category
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-serif text-2xl text-stone-900">
            Available in this category
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Current in-stock pieces — contact me to reserve or purchase.
          </p>
          {category.products.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-stone-600">
              Nothing listed here right now.{" "}
              <Link
                href="/personal-shopping#quote-contact"
                className="text-stone-900 underline"
              >
                Message me
              </Link>{" "}
              to source from this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
