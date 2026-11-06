import type { Metadata } from "next";
import { QuoteContact } from "@/components/QuoteContact";

export const metadata: Metadata = {
  title: "Personal Shopping",
  description:
    "Contact for quotes on in-stock pieces and custom sourcing requests.",
};

export default function PersonalShoppingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 lg:px-6 lg:py-20">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        Concierge sourcing
      </p>
      <h1 className="mt-3 font-serif text-4xl text-stone-900">
        Personal shopping & quotes
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-stone-600">
        To buy an item from the shop or request something else, reach out by
        email or the channels below. I reply with payment and shipping details.
      </p>

      <div className="mt-12">
        <QuoteContact />
      </div>
    </div>
  );
}
