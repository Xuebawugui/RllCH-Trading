import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/lib/categories";
import { inventory } from "@/lib/inventory";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          {[
            {
              step: "01",
              title: "Tell me what you want",
              text: "Share brand, model, size, and budget — or send a link. No account required.",
            },
            {
              step: "02",
              title: "Receive a tailored offer",
              text: "I source from trusted retailers and partners, then send a clear quote with timeline.",
            },
            {
              step: "03",
              title: "Confirm & receive",
              text: "Once you approve, I handle purchase coordination and keep you updated until delivery.",
            },
          ].map((item) => (
            <div key={item.step} className="border-t border-stone-300 pt-6">
              <p className="text-[11px] tracking-[0.25em] text-stone-500">
                {item.step}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-stone-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-stone-500 uppercase">
                Collections
              </p>
              <h2 className="mt-2 font-serif text-3xl text-stone-900 lg:text-4xl">
                Shop by category
              </h2>
            </div>
            <p className="max-w-md text-sm text-stone-600">
              Browse by category — listed prices are for current in-stock pieces.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-stone-500 uppercase">
              In stock
            </p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">
              Available now
            </h2>
          </div>
          <Link
            href="/personal-shopping#quote-contact"
            className="text-[11px] tracking-[0.2em] text-stone-800 uppercase underline-offset-4 hover:underline"
          >
            Contact to buy
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-6">
          {inventory.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                id: item.id,
                brand: item.brand,
                name: item.name,
                price: item.price,
                image: item.image,
                imageAlt: item.imageAlt,
              }}
            />
          ))}
        </div>
      </section>

      <section className="bg-stone-900 px-4 py-20 text-center text-white lg:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/70">
            Personal shopping
          </p>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl">
            Can&apos;t find it listed? I&apos;ll source it for you.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Specific products, rare sizes, sold-out drops, or full outfits — get
            in touch for a personalized offer.
          </p>
          <Link
            href="/personal-shopping#quote-contact"
            className="mt-8 inline-block border border-white px-10 py-3.5 text-[11px] tracking-[0.25em] uppercase transition hover:bg-white hover:text-stone-900"
          >
            View contact & quote
          </Link>
        </div>
      </section>
    </>
  );
}
