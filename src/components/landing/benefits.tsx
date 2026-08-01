"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Sparkle,
  ShieldCheck,
  FlowerLotus,
  Leaf,
  Drop,
  Timer,
  Plus,
  Info,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [Sparkle, ShieldCheck, FlowerLotus, Leaf, Drop, Timer];

export function Benefits() {
  const t = useTranslations("benefits");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const cards = t.raw("cards") as { title: string; text: string; extra: string }[];

  function toggle(i: number) {
    setOpenIndex((cur) => (cur === i ? null : i));
  }

  return (
    <section id="beneficii" className="relative bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              {t("subtext")}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((benefit, i) => {
            const Icon = ICONS[i];
            const featured = i === 2;
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={benefit.title}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className={
                    featured
                      ? "group flex h-full w-full cursor-pointer flex-col rounded-blob bg-forest p-7 text-left text-cream shadow-card transition-transform duration-200 hover:-translate-y-1.5"
                      : "group flex h-full w-full cursor-pointer flex-col rounded-blob border border-cream-3 bg-cream p-7 text-left shadow-soft transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-card"
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={
                        featured
                          ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15 text-gold"
                          : "flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700"
                      }
                    >
                      <Icon size={24} weight="bold" />
                    </span>
                    <span
                      className={
                        featured
                          ? "flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream transition-transform duration-300 group-hover:scale-105"
                          : "flex h-8 w-8 items-center justify-center rounded-full bg-leaf-soft text-forest-700 transition-transform duration-300 group-hover:scale-105"
                      }
                      aria-hidden="true"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex"
                      >
                        <Plus size={16} weight="bold" />
                      </motion.span>
                    </span>
                  </div>

                  <h3
                    className={
                      featured
                        ? "font-display mt-5 text-xl font-bold text-cream"
                        : "font-display mt-5 text-xl font-bold text-forest-900"
                    }
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? "mt-2 leading-relaxed text-cream/80"
                        : "mt-2 leading-relaxed text-ink-soft"
                    }
                  >
                    {benefit.text}
                  </p>

                  {/* Expanded "tooltip" with more info */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="extra"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.3,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className={
                            featured
                              ? "mt-4 rounded-2xl bg-cream/10 p-4 text-sm leading-relaxed text-cream/90"
                              : "mt-4 rounded-2xl border border-leaf/30 bg-leaf-soft/60 p-4 text-sm leading-relaxed text-ink-soft"
                          }
                        >
                          <span className="mb-1.5 flex items-center gap-1.5 font-bold text-forest-700">
                            <Info size={14} weight="fill" />
                            {t("more")}
                          </span>
                          {benefit.extra}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span
                    className={
                      featured
                        ? "mt-auto pt-4 text-xs font-semibold uppercase tracking-wide text-cream/60"
                        : "mt-auto pt-4 text-xs font-semibold uppercase tracking-wide text-leaf-600"
                    }
                  >
                    {isOpen ? t("close") : t("tap")}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
