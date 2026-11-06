"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/categories";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/personal-shopping", label: "Personal Shopping" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <div className="border-b border-stone-100 bg-stone-50/80">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] tracking-[0.2em] text-stone-600 uppercase">
          Premium sourcing across Europe · Quotes in 24–48h
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-stone-900 transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-stone-900 transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-stone-900 transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              className="text-xs tracking-[0.15em] text-stone-800 uppercase transition hover:text-stone-500"
              aria-expanded={categoriesOpen}
            >
              Categories
            </button>
            {categoriesOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="min-w-[280px] border border-stone-200 bg-white p-4 shadow-lg">
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/categories/${cat.slug}`}
                          className="block py-1 text-sm text-stone-800 transition hover:text-stone-500"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition hover:text-stone-500 ${
                pathname === link.href ? "text-stone-500" : "text-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="max-w-[45vw] truncate text-center font-serif text-lg tracking-[0.04em] text-stone-900 sm:max-w-none sm:overflow-visible sm:whitespace-normal lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:text-2xl"
        >
          {site.name}
        </Link>

        <Link
          href="/personal-shopping#quote-contact"
          className="hidden border border-stone-900 px-4 py-2 text-[11px] tracking-[0.2em] text-stone-900 uppercase transition hover:bg-stone-900 hover:text-white sm:inline-block"
        >
          Request a quote
        </Link>
        <Link
          href="/personal-shopping#quote-contact"
          className="text-[11px] tracking-[0.15em] text-stone-800 uppercase sm:hidden"
        >
          Quote
        </Link>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone-200 bg-white px-4 py-6 lg:hidden">
          <p className="mb-3 text-[10px] tracking-[0.2em] text-stone-500 uppercase">
            Categories
          </p>
          <ul className="mb-6 space-y-3">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="text-sm text-stone-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 border-t border-stone-100 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
