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
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { useCart } from "@/components/cart/cart-provider";

const PLANS = [
  {
    id: "proctorex-50g",
    size: "50 g",
    price: 30,
    note: "Pentru început sau călătorii",
    cta: "Comandă 50 g",
    features: ["Cremă naturală 50 g", "Livrare discretă", "Plată sigură"],
    featured: false,
  },
  {
    id: "proctorex-100g",
    size: "100 g",
    price: 60,
    note: "Cel mai echilibrat raport preț–cantitate",
    cta: "Comandă 100 g",
    features: [
      "Cremă naturală 100 g",
      "Livrare discretă",
      "Plată sigură",
      "Retur gratuit 30 zile",
    ],
    featured: true,
  },
  {
    id: "proctorex-2x100g",
    size: "2 × 100 g",
    price: 100,
    note: "Economisești 20 lei, ai provizie pe 2 luni",
    cta: "Comandă pachetul",
    features: [
      "2 × Cremă naturală 100 g",
      "Livrare discretă",
      "Plată sigură",
      "Retur gratuit 30 zile",
    ],
    featured: false,
  },
];

const PERKS = [
  { icon: Truck, label: "Transport gratuit la comenzile peste 250 lei" },
  { icon: ArrowCounterClockwise, label: "Retur gratuit 30 zile" },
  { icon: CreditCard, label: "Plată: Card sau Ramburs" },
];

export function Pricing() {
  const { addItem } = useCart();
  const reduce = useReducedMotion();

  return (
    <section id="preturi" className="relative bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Prețuri</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              Alege ambalajul potrivit pentru tine
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Prețuri corecte, fără costuri ascunse. Comanda se expediază
              discret, în ambalaj neutru.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={
                plan.featured
                  ? "flex md:-my-3"
                  : "flex"
              }
            >
              <article
                className={
                  plan.featured
                    ? "relative flex h-full w-full flex-col rounded-blob bg-forest p-7 text-cream shadow-card transition-transform duration-300 hover:-translate-y-2 md:py-10"
                    : "relative flex h-full w-full flex-col rounded-blob border border-cream-3 bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
                }
              >
                {plan.featured && (
                  <motion.span
                    className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-forest-950 shadow-card"
                    animate={reduce ? {} : { y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Star size={13} weight="fill" />
                    Recomandat
                  </motion.span>
                )}

                <h3
                  className={
                    plan.featured
                      ? "font-display text-2xl font-bold text-cream"
                      : "font-display text-2xl font-bold text-forest-900"
                  }
                >
                  PROCTOREX {plan.size}
                </h3>
                <p
                  className={
                    plan.featured
                      ? "mt-1 text-sm text-cream/70"
                      : "mt-1 text-sm text-ink-soft"
                  }
                >
                  {plan.note}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={
                      plan.featured
                        ? "font-display text-5xl font-bold text-gold"
                        : "font-display text-5xl font-bold text-forest"
                    }
                  >
                    <CountUp to={plan.price} />
                  </span>
                  <span
                    className={
                      plan.featured
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
                        plan.featured
                          ? "flex items-center gap-2.5 text-sm text-cream/90"
                          : "flex items-center gap-2.5 text-sm text-ink-soft"
                      }
                    >
                      <Check
                        size={17}
                        weight="bold"
                        className={
                          plan.featured ? "text-gold" : "text-forest-600"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    addItem(plan.id, `PROCTOREX ${plan.size}`, plan.price)
                  }
                  className={
                    plan.featured
                      ? "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 font-bold text-forest-900 transition-all duration-200 hover:bg-white active:scale-[0.97]"
                      : "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 active:scale-[0.97]"
                  }
                >
                  <Basket size={18} weight="bold" />
                  {plan.cta}
                </button>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Delivery & payment strip */}
        <Reveal>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-4 rounded-blob border border-cream-3 bg-cream px-6 py-6 shadow-soft sm:flex-row sm:gap-8">
            {PERKS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                  <Icon size={18} weight="bold" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
