import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn how ${site.name} sources premium and luxury products.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6 lg:py-20">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        About
      </p>
      <h1 className="mt-3 font-serif text-4xl text-stone-900">
        Premium sourcing, personally handled
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone-600">
        <p>
          {site.name} is a personal shopping and sourcing service focused on
          authentic premium and luxury products. Whether you need the latest
          sneaker drop, a designer bag, or a full wardrobe refresh, I work from
          your brief — not a fixed warehouse catalogue.
        </p>
        <p>
          Inspired by the clarity and curation of leading luxury retailers, this
          site showcases the categories and brands I work with most often. Listed
          prices are starting points; every order is quoted individually based
          on source, condition, and shipping.
        </p>
        <p>
          I prioritize transparent communication, realistic timelines, and
          sourcing from reputable channels. If an item cannot be found within
          your budget, I will suggest alternatives.
        </p>
      </div>
      <Link
        href="/personal-shopping"
        className="mt-10 inline-block bg-stone-900 px-8 py-3.5 text-[11px] tracking-[0.25em] text-white uppercase transition hover:bg-stone-700"
      >
        Work with me
      </Link>
    </div>
  );
}
