"use client";

import { useState } from "react";
import { Basket, List, X, Leaf, Globe } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/components/cart/cart-provider";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";

const NAV_KEYS = [
  { href: "#despre", key: "despre" },
  { href: "#ingrediente", key: "ingrediente" },
  { href: "#beneficii", key: "beneficii" },
  { href: "#preturi", key: "preturi" },
  { href: "#comanda", key: "comanda" },
  { href: "#contact", key: "contact" },
] as const;

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
];

export function Header() {
  const { count, openCart } = useCart();
  const t = useTranslations("nav");
  const brand = useTranslations("brand");
  const cart = useTranslations("cart");
  const lang = useTranslations("language");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-3 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-18 md:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="PROCTOREX"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
            <Leaf weight="fill" size={20} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-tight text-forest-900">
              PROCTOREX
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-600">
              {brand("tagline")}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV_KEYS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft transition-colors duration-200 hover:text-forest"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label={lang("label")}
              className="flex h-10 items-center gap-1.5 rounded-full border border-cream-3 px-3 text-sm font-bold text-forest-900 transition-colors hover:bg-cream-2"
            >
              <Globe size={16} weight="bold" />
              <span className="hidden sm:inline">
                {LANGUAGES.find((l) => l.code === locale)?.label}
              </span>
            </button>
            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 top-12 w-40 overflow-hidden rounded-2xl border border-cream-3 bg-cream p-1.5 shadow-card"
              >
                {LANGUAGES.map((l) => (
                  <Link
                    key={l.code}
                    href="/"
                    locale={l.code}
                    role="menuitem"
                    onClick={() => setLangOpen(false)}
                    className={`block rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-cream-2 ${
                      l.code === locale
                        ? "text-forest"
                        : "text-ink-soft"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={openCart}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-forest px-4 py-2 text-sm font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 active:scale-[0.97] sm:flex"
          >
            <Basket size={17} weight="bold" />
            {cart("pill", { count })}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-3 text-forest-900 lg:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          aria-label="Principal (mobil)"
          className="border-t border-cream-3 bg-cream px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_KEYS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-ink-soft hover:bg-cream-2 hover:text-forest"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCart();
                }}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-forest px-4 py-3 text-sm font-bold text-cream"
              >
                <Basket size={17} weight="bold" />
                {cart("pill", { count })}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
