"use client";

import {
  Truck,
  CreditCard,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCart } from "@/components/cart/cart-provider";

const PLANS = [
  { id: "proctorex-50g", price: 30, featured: false },
  { id: "proctorex-100g", price: 60, featured: true },
  { id: "proctorex-2x100g", price: 100, featured: false },
];

const PERK_ICONS = [Truck, CreditCard, ArrowCounterClockwise];

const PRODUCT_ASSETS = [
  { src: "/proctorex/proctorex-jar.png", width: 635, height: 686 },
  { src: "/proctorex/proctorex-jar.png", width: 635, height: 686 },
  { src: "/proctorex/proctorex-jar-pair.png", width: 765, height: 686 },
] as const;

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
    <section id="preturi" className="relative bg-cream">
      <div className="mx-auto max-w-[820px] px-6 pb-2 pt-3.5 md:px-8 md:pb-2 md:pt-3.5">
        {/* Heading */}
        <h2 className="font-display text-center text-[1.6rem] italic font-semibold leading-tight text-forest-900 md:text-[1.65rem]">
          {t("title")}
        </h2>

        {/* Certification line */}
        <p className="mt-1 text-center text-[13px] text-ink">{t("cert")}</p>

        {/* Product boxes */}
        <div className="mt-2 grid gap-3 sm:grid-cols-[0.9fr_1.1fr_0.95fr] sm:gap-4">
          {plans.map((plan, i) => {
            const meta = PLANS[i];
            const product = PRODUCT_ASSETS[i];
            return (
              <div
                key={meta.id}
                className={`relative flex ${meta.featured ? "z-10" : "z-0"}`}
              >
                {meta.featured && (
                  <span className="absolute -top-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-3 py-0.5 text-[10px] font-semibold text-cream">
                    {t("recomandat")}
                  </span>
                )}
                <div
                  className={
                    meta.featured
                      ? "relative z-0 flex h-[10.8rem] w-full flex-col items-center rounded-[7px] border border-forest/50 bg-cream px-3 pb-3 pt-4 text-center"
                      : "relative z-0 flex h-[10.8rem] w-full flex-col items-center rounded-[7px] border border-cream-3 bg-cream px-3 pb-3 pt-4 text-center"
                  }
                >
                  <h3 className="font-display whitespace-nowrap text-[14px] font-semibold text-ink">
                    {plan.name}
                  </h3>

                  <p className="font-display absolute left-0 top-[3.55rem] w-full text-[2rem] font-semibold leading-none text-forest">
                    {meta.price}
                    <span className="ml-1 text-[16px] font-semibold text-ink-soft">
                      lei
                    </span>
                  </p>

                  <Image
                    src={product.src}
                    alt=""
                    width={product.width}
                    height={product.height}
                    unoptimized
                    aria-hidden="true"
                    className={`absolute ${i < 2 ? "right-[-8px]" : "right-2"} top-[3.25rem] h-[4.5rem] w-auto max-w-none object-contain`}
                    style={i < 2 ? { clipPath: "inset(0 22% 0 0)" } : undefined}
                  />

                  <button
                    type="button"
                    onClick={() => addItem(meta.id, plan.name, meta.price)}
                    className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center whitespace-nowrap rounded-[5px] bg-forest px-5 py-2 text-[13px] text-cream transition-colors duration-200 hover:bg-forest-700 active:scale-[0.98]"
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thin delivery / payment / service row */}
        <div className="mx-auto mt-3 flex max-w-[740px] items-center justify-center divide-x divide-cream-3 border-t border-b border-cream-3 py-1.5">
          {perks.map((label, i) => {
            const Icon = PERK_ICONS[i];
            return (
              <span
                key={label}
                className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 text-center text-[10px] text-ink sm:px-3"
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
