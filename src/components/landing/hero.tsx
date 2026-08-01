import {
  Truck,
  ShieldCheck,
  ArrowCounterClockwise,
  ArrowDown,
} from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import { ProductVisual } from "@/components/landing/product-visual";
import { LeafCluster } from "@/components/landing/leaves";

const TRUST_ICONS = [Truck, ShieldCheck, ArrowCounterClockwise];

export async function Hero() {
  const t = await getTranslations("hero");
  const aria = await getTranslations("aria");
  const trust = t.raw("trust") as string[];

  return (
    <section id="despre" className="relative overflow-hidden">
      {/* decorative leaves */}
      <LeafCluster className="pointer-events-none absolute -right-8 -top-10 w-40 text-leaf/40 md:w-56" />
      <LeafCluster className="pointer-events-none absolute -bottom-24 -left-16 w-48 rotate-45 text-leaf/25" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-forest-900 sm:text-5xl md:text-6xl">
            {t("title1")}
            <br />
            <span className="text-forest">{t("title2")}</span>
          </h1>

          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
            {t("body")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#preturi"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-base font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 hover:shadow-soft active:scale-[0.97]"
            >
              {t("ctaPrimary")}
              <ArrowDown size={18} weight="bold" />
            </a>
            <a
              href="#comanda"
              className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-white/60 px-6 py-3.5 text-base font-bold text-forest-900 transition-colors duration-200 hover:border-forest hover:bg-white"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          {/* Trust chips */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {trust.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-soft"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                    <Icon size={15} weight="bold" />
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Product visual */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto my-auto h-[86%] w-[86%] rounded-[44%_56%_58%_42%/46%_44%_56%_54%] bg-cream-2" />
          <ProductVisual
            ariaLabel={aria("product")}
            className="mx-auto w-full max-w-140"
          />
        </div>
      </div>
    </section>
  );
}
