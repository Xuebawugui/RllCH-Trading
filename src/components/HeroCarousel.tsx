"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { categories, formatPrice } from "@/lib/categories";
import { site } from "@/lib/site";

const INTERVAL_MS = 3000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = categories.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const slide = categories[active];

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden bg-stone-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Shop by category"
    >
      {categories.map((cat, index) => (
        <div
          key={cat.slug}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={cat.heroImage}
            alt={cat.heroImageAlt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover opacity-85"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 lg:px-6 lg:pb-24">
        <p className="text-[11px] tracking-[0.35em] text-white/90 uppercase">
          {site.tagline}
        </p>
        <p className="mt-4 text-[11px] tracking-[0.25em] text-white/75 uppercase">
          From {formatPrice(slide.priceFrom)}
        </p>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">
          {slide.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/categories/${slide.slug}`}
            className="bg-white px-8 py-3.5 text-[11px] tracking-[0.25em] text-stone-900 uppercase transition hover:bg-stone-100"
          >
            Explore {slide.shortTitle}
          </Link>
          <Link
            href="/personal-shopping#quote-contact"
            className="border border-white/80 px-8 py-3.5 text-[11px] tracking-[0.25em] text-white uppercase transition hover:bg-white/10"
          >
            Request a quote
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:bottom-8">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          className="hidden h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:bg-white/10 sm:flex"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 transition-all ${
                index === active
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/45 hover:bg-white/70"
              }`}
              aria-label={`Go to ${cat.title}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className="hidden h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:bg-white/10 sm:flex"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
