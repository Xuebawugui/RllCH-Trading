import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez comment ${site.name} source des produits premium et de luxe.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6 lg:py-20">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        À propos
      </p>
      <h1 className="mt-3 font-serif text-4xl text-stone-900">
        Sourcing premium, suivi en personne
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone-600">
        <p>
          {site.name} est un service de shopping personnel et de sourcing axé
          sur des produits premium et de luxe authentiques. Que vous cherchiez
          le dernier drop sneaker, un sac designer ou un renouvellement de
          garde-robe, je travaille à partir de votre brief — pas d&apos;un
          catalogue figé.
        </p>
        <p>
          Inspiré par la clarté des grandes maisons en ligne, ce site présente
          les catégories et marques avec lesquelles je travaille le plus
          souvent. Les prix affichés sont indicatifs ; chaque commande fait
          l&apos;objet d&apos;un devis selon la source, l&apos;état et
          l&apos;expédition.
        </p>
        <p>
          Je privilégie une communication transparente, des délais réalistes et
          un sourcing via des canaux sérieux. Si un article dépasse votre
          budget, je propose des alternatives.
        </p>
      </div>
      <Link
        href="/personal-shopping#quote-contact"
        className="mt-10 inline-block bg-stone-900 px-8 py-3.5 text-[11px] tracking-[0.25em] text-white uppercase transition hover:bg-stone-700"
      >
        Travailler ensemble
      </Link>
    </div>
  );
}
