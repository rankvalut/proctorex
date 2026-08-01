"use client";

import { useState } from "react";
import Image from "next/image";
import { Basket, List, X } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useCart } from "@/components/cart/cart-provider";
import { Link } from "@/i18n/navigation";

const NAV_KEYS = [
  { href: "/#despre", key: "despre" },
  { href: "/ingrediente", key: "ingrediente" },
  { href: "/#beneficii", key: "beneficii" },
  { href: "/#preturi", key: "preturi" },
  { href: "/#comanda", key: "comanda" },
  { href: "/#contact", key: "contact" },
] as const;

export function Header() {
  const { count, openCart } = useCart();
  const t = useTranslations("nav");
  const brand = useTranslations("brand");
  const cart = useTranslations("cart");
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-cream-3 bg-cream">
      <div className="mx-auto flex h-[6.95rem] max-w-[1320px] items-center justify-between gap-5 px-6 md:px-10">
        {/* Brand */}
        <a
          href="#despre"
          className="relative flex min-w-[210px] flex-col items-start leading-none"
          aria-label="PROCTOREX"
        >
          <Image
            src="/proctorex/proctorex-3leaf.png"
            alt=""
            width={1239}
            height={848}
            unoptimized
            className="pointer-events-none absolute left-[4.1rem] -top-2 h-[2.5rem] w-[3.9rem] object-contain"
          />
          <span className="font-display mt-7 block text-[2.1rem] font-semibold tracking-[-0.045em] text-forest-900">
            PROCTOREX
          </span>
          <span className="font-display mt-2 block pl-4 text-[15px] italic text-forest-700">
            {brand("tagline")}
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_KEYS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display whitespace-nowrap text-[12px] uppercase tracking-[0.01em] text-ink-soft transition-colors duration-200 hover:text-forest"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="hidden h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] bg-cream-2 px-4 text-[13px] text-forest-900 transition-colors duration-200 hover:bg-leaf-soft sm:flex"
          >
            <Basket size={17} weight="bold" />
            {cart("pill", { count })}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-cream-3 text-forest-900 md:hidden"
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
          className="border-t border-cream-3 bg-cream px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_KEYS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-display text-[15px] uppercase text-ink-soft hover:bg-cream-2 hover:text-forest"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCart();
                }}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-forest px-4 py-3 text-sm text-cream"
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
