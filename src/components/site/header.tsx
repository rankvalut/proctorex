"use client";

import { useState } from "react";
import { Basket, List, X, Leaf } from "@phosphor-icons/react";
import { useCart } from "@/components/cart/cart-provider";

const NAV = [
  { href: "#despre", label: "Despre produs" },
  { href: "#ingrediente", label: "Ingrediente" },
  { href: "#beneficii", label: "Beneficii" },
  { href: "#preturi", label: "Prețuri" },
  { href: "#comanda", label: "Comandă" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-3 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-18 md:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="PROCTOREX — acasă"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
            <Leaf weight="fill" size={20} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-tight text-forest-900">
              PROCTOREX
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-600">
              Ajutor natural. Zi de zi.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft transition-colors duration-200 hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#comanda"
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-cream shadow-card transition-colors duration-200 hover:bg-forest-600 active:scale-[0.97] sm:flex"
          >
            <Basket size={17} weight="bold" />
            Coș ({count})
          </a>
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
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-ink-soft hover:bg-cream-2 hover:text-forest"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#comanda"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-bold text-cream"
              >
                <Basket size={17} weight="bold" />
                Coș ({count})
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
