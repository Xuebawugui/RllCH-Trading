import Link from "next/link";
import { categories } from "@/lib/categories";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="font-serif text-lg tracking-wide text-stone-900">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">
            Par catégorie
          </p>
          <ul className="mt-4 space-y-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="text-sm text-stone-700 transition hover:text-stone-900"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/personal-shopping"
                className="text-sm text-stone-700 transition hover:text-stone-900"
              >
                Shopping personnel
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-stone-700 transition hover:text-stone-900"
              >
                Comment ça marche
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-stone-700 transition hover:text-stone-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">
            Nous suivre
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            <li>
              <a
                href={`mailto:${site.contactEmail}`}
                className="transition hover:text-stone-900"
              >
                {site.contactEmail}
              </a>
            </li>
            {site.instagram ? (
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-stone-900"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {site.whatsapp ? (
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-stone-900"
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-stone-500 lg:px-6">
          © 2026 {site.name}. Les noms de marques servent uniquement de repère
          par catégorie. Aucun lien avec les maisons ou revendeurs cités.
        </p>
      </div>
    </footer>
  );
}
