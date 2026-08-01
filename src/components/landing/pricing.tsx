"use client";

import {
  Basket,
  Truck,
  CreditCard,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useCart } from "@/components/cart/cart-provider";
import { JarMini } from "@/components/landing/jar-mini";

const PLANS = [
  { id: "proctorex-50g", price: 30, featured: false },
  { id: "proctorex-100g", price: 60, featured: true },
  { id: "proctorex-2x100g", price: 100, featured: false },
];

const PERK_ICONS = [Truck, CreditCard, ArrowCounterClockwise];

/**
 * Compact, brochure-style product offer — the "O cremă naturală, produsă în
 * România" block from the source advertisement. Deliberately NOT a SaaS card:
 * thin borders, serif prices, small rectangular buttons, no shadows, tight rows.
 */
export function Pricing() {
  const { addItem } = useCart();
  const t = useTranslations("pricing");

  const plans = t.raw("plans") as { name: string; cta: string }[];
  const perks = t.raw("perks") as string[];

  return (
    <section id="preturi" className="relative bg-cream-2/60">
      <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        {/* Heading */}
        <h2 className="font-display text-center text-3xl italic font-semibold leading-tight text-forest-900 md:text-4xl">
          {t("title")}
        </h2>

        {/* Certification line */}
        <p className="mt-2 text-center text-sm text-ink-soft">{t("cert")}</p>

        {/* Product boxes */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
          {plans.map((plan, i) => {
            const meta = PLANS[i];
            return (
              <div key={meta.id} className="relative flex">
                {meta.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-forest px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cream">
                    {t("recomandat")}
                  </span>
                )}
                <div
                  className={
                    meta.featured
                      ? "flex w-full flex-col items-center rounded-md border border-forest/50 bg-cream px-4 pb-5 pt-6 text-center"
                      : "flex w-full flex-col items-center rounded-md border border-cream-3 bg-cream px-4 pb-5 pt-6 text-center"
                  }
                >
                  <h3 className="font-display text-xl font-semibold text-forest-900">
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex h-24 items-center justify-center">
                    <JarMini className="h-24 w-auto" />
                  </div>

                  <p className="font-display mt-2 text-4xl font-bold leading-none text-forest">
                    {meta.price}
                    <span className="ml-1 text-xl font-semibold text-ink-soft">
                      lei
                    </span>
                  </p>

                  <button
                    type="button"
                    onClick={() => addItem(meta.id, plan.name, meta.price)}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-sm bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-forest-700 active:scale-[0.98]"
                  >
                    <Basket size={15} weight="bold" />
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thin delivery / payment / service row */}
        <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center divide-x divide-cream-3 border-t border-b border-cream-3 py-3">
          {perks.map((label, i) => {
            const Icon = PERK_ICONS[i];
            return (
              <span
                key={label}
                className="flex flex-1 items-center justify-center gap-1.5 px-2 text-center text-xs font-semibold text-ink-soft sm:px-3"
              >
                <Icon size={14} weight="bold" className="shrink-0 text-forest" />
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
