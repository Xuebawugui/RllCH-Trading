import {
  contactPhoneDisplay,
  contactPhoneTel,
  site,
} from "@/lib/site";

export function QuoteContact() {
  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <aside
      id="quote-contact"
      className="scroll-mt-28 border border-stone-200 bg-stone-50 p-6 lg:p-8"
    >
      <p className="text-[11px] tracking-[0.25em] text-stone-500 uppercase">
        Demander un devis
      </p>
      <h2 className="mt-2 font-serif text-2xl text-stone-900">
        Contactez-moi directement
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        Envoyez le lien du produit, la marque, la taille et votre budget. Je
        réponds en général sous 24–48 h avec la disponibilité et un prix en
        euros.
      </p>

      <ul className="mt-8 space-y-5 border-t border-stone-200 pt-8 text-sm">
        <li>
          <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
            Contact
          </p>
          <p className="mt-1 text-base font-medium text-stone-900">
            {site.contactName}
          </p>
        </li>
        <li>
          <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
            E-mail
          </p>
          <a
            href={`mailto:${site.contactEmail}?subject=${encodeURIComponent("Demande de devis")}`}
            className="mt-1 inline-block text-base text-stone-900 underline-offset-4 hover:underline"
          >
            {site.contactEmail}
          </a>
        </li>

        {site.contactPhone ? (
          <li>
            <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
              Téléphone
            </p>
            <a
              href={`tel:${contactPhoneTel()}`}
              className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
            >
              {contactPhoneDisplay()}
            </a>
          </li>
        ) : null}

        {whatsappHref ? (
          <li>
            <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
              WhatsApp
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
            >
              Écrire sur WhatsApp
            </a>
          </li>
        ) : null}

        {site.instagram ? (
          <li>
            <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
              Instagram
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-stone-900 underline-offset-4 hover:underline"
            >
              {site.instagram.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}
