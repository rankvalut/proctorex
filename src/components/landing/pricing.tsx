"use client";

import {
  Basket,
  Check,
  Truck,
  ArrowCounterClockwise,
  CreditCard,
  Star,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { useCart } from "@/components/cart/cart-provider";

const PLANS = [
  { id: "proctorex-50g", price: 30, featured: false },
  { id: "proctorex-100g", price: 60, featured: true },
  { id: "proctorex-2x100g", price: 100, featured: false },
];

const PERK_ICONS = [Truck, ArrowCounterClockwise, CreditCard];

export function Pricing() {
  const { addItem } = useCart();
  const t = useTranslations("pricing");
  const reduce = useReducedMotion();

  const plans = t.raw("plans") as {
    size: string;
    note: string;
    cta: string;
    features: string[];
  }[];
  const perks = t.raw("perks") as string[];

  return (
    <section id="preturi" className="relative bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {t("subtext")}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const meta = PLANS[i];
            return (
            <motion.div
              key={meta.id}
              initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={meta.featured ? "flex md:-my-3" : "flex"}
            >
              <article
                className={
                  meta.featured
                    ? "relative flex h-full w-full flex-col rounded-blob bg-forest p-7 text-cream shadow-card transition-transform duration-300 hover:-translate-y-2 md:py-10"
                    : "relative flex h-full w-full flex-col rounded-blob border border-cream-3 bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
                }
              >
                {meta.featured && (
                  <motion.span
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    animate={reduce ? {} : { y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* gradient glow ring */}
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[-1.5px] rounded-full"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #c9a24b, #fbf6ec, #84ac90, #c9a24b)",
                      }}
                      animate={reduce ? {} : { rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* badge label */}
                    <span className="relative flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-forest-950 shadow-card">
                      <Star size={13} weight="fill" />
                      {t("recomandat")}
                    </span>
                  </motion.span>
                )}

                <h3
                  className={
                    meta.featured
                      ? "font-display text-2xl font-bold text-cream"
                      : "font-display text-2xl font-bold text-forest-900"
                  }
                >
                  {t("productName")} {plan.size}
                </h3>
                <p
                  className={
                    meta.featured
                      ? "mt-1 text-sm text-cream/70"
                      : "mt-1 text-sm text-ink-soft"
                  }
                >
                  {plan.note}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={
                      meta.featured
                        ? "font-display text-5xl font-bold text-gold"
                        : "font-display text-5xl font-bold text-forest"
                    }
                  >
                    <CountUp to={meta.price} />
                  </span>
                  <span
                    className={
                      meta.featured
                        ? "text-base font-bold text-cream/70"
                        : "text-base font-bold text-ink-soft"
                    }
                  >
                    lei
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={
                        meta.featured
                          ? "flex items-center gap-2.5 text-sm text-cream/90"
                          : "flex items-center gap-2.5 text-sm text-ink-soft"
                      }
                    >
                      <Check
                        size={17}
                        weight="bold"
                        className={
                          meta.featured ? "text-gold" : "text-forest-600"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    addItem(
                      meta.id,
                      `${t("productName")} ${plan.size}`,
                      meta.price,
                    )
                  }
                  className={
                    meta.featured
                      ? "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 font-bold text-forest-900 transition-all duration-200 hover:bg-white active:scale-[0.97]"
                      : "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 active:scale-[0.97]"
                  }
                >
                  <Basket size={18} weight="bold" />
                  {plan.cta}
                </button>
              </article>
            </motion.div>
            );
          })}
        </div>

        {/* Delivery & payment strip */}
        <Reveal>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-4 rounded-blob border border-cream-3 bg-cream px-6 py-6 shadow-soft sm:flex-row sm:gap-8">
            {perks.map((label, i) => {
              const Icon = PERK_ICONS[i];
              return (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                    <Icon size={18} weight="bold" />
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
