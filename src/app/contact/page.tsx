import type { Metadata } from "next";
import Link from "next/link";
import { contactPhoneDisplay, contactPhoneTel, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6 lg:py-20">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-4xl text-stone-900">Nous écrire</h1>
      <p className="mt-4 text-sm leading-relaxed text-stone-600">
        Pour un achat ou un devis, contactez {site.contactName} par téléphone ou
        e-mail, ou consultez la page devis pour tous les détails.
      </p>

      <ul className="mt-10 space-y-6 border-t border-stone-200 pt-10 text-sm">
        <li>
          <p className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Nom
          </p>
          <p className="mt-1 text-stone-900">{site.contactName}</p>
        </li>
        <li>
          <p className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Téléphone
          </p>
          <a
            href={`tel:${contactPhoneTel()}`}
            className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
          >
            {contactPhoneDisplay()}
          </a>
        </li>
        <li>
          <p className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            E-mail
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
          >
            {site.contactEmail}
          </a>
        </li>
        <li>
          <p className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Page devis
          </p>
          <Link
            href="/personal-shopping#quote-contact"
            className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
          >
            Demander un devis
          </Link>
        </li>
      </ul>
    </div>
  );
}
