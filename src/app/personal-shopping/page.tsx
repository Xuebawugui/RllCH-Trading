import type { Metadata } from "next";
import { QuoteContact } from "@/components/QuoteContact";

export const metadata: Metadata = {
  title: "Shopping personnel",
  description:
    "Contact pour devis sur les pièces en stock et demandes de sourcing sur mesure.",
};

export default function PersonalShoppingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 lg:px-6 lg:py-20">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        Conciergerie sourcing
      </p>
      <h1 className="mt-3 font-serif text-4xl text-stone-900">
        Shopping personnel & devis
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-stone-600">
        Pour acheter un article de la boutique ou demander autre chose,
        contactez-moi par e-mail ou via les canaux ci-dessous. Je réponds avec
        les modalités de paiement et d&apos;expédition.
      </p>

      <div className="mt-12">
        <QuoteContact />
      </div>
    </div>
  );
}
