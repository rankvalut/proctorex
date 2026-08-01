"use client";

import { Basket } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useCart } from "@/components/cart/cart-provider";
import { JarMini } from "@/components/landing/jar-mini";

/** The featured product offered on the section pages (100 g jar). */
const FEATURED = { id: "proctorex-100g", price: 60 };

/**
 * Compact add-to-cart offer used at the bottom of the Beneficii / Ingrediente /
 * Cum funcționează pages. Shows the jar, name, price and an add-to-cart button.
 */
export function ProductCta() {
  const { addItem } = useCart();
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as { name: string; cta: string }[];
  const featured = plans[1] ?? plans[0];

  return (
    <section className="border-t border-cream-3 bg-cream-2/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 py-12 text-center md:px-8">
        <JarMini className="h-24 w-auto" />
        <p className="font-display text-2xl font-semibold text-forest-900">
          {featured.name}
        </p>
        <p className="font-display text-4xl font-bold text-forest">
          {FEATURED.price} <span className="text-xl">lei</span>
        </p>
        <button
          type="button"
          onClick={() => addItem(FEATURED.id, featured.name, FEATURED.price)}
          className="inline-flex items-center gap-2 rounded-sm bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-forest-700 active:scale-[0.98]"
        >
          <Basket size={16} weight="bold" />
          {t("addToCart")}
        </button>
      </div>
    </section>
  );
}
