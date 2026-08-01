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
  const brand = await getTranslations("brand");
  const aria = await getTranslations("aria");
  const trust = t.raw("trust") as string[];

  return (
    <section id="despre" className="relative overflow-hidden">
      {/* subtle botanical corner decorations */}
      <LeafCluster className="pointer-events-none absolute -right-10 -top-12 w-44 text-leaf/30 md:w-60" />
      <LeafCluster className="pointer-events-none absolute -bottom-28 -left-16 w-52 rotate-45 text-leaf/20" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        {/* Copy */}
        <div className="max-w-xl">
          <h1 className="font-display text-5xl font-semibold leading-none text-forest-900 sm:text-6xl md:text-7xl">
            {brand("name")}
          </h1>
          <p className="font-display mt-2 text-2xl italic leading-snug text-forest sm:text-3xl">
            {t("title1")} {t("title2")}
          </p>
          <div className="mt-4 h-px w-24 bg-gold/70" aria-hidden="true" />

          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft md:text-lg">
            {t("body")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#preturi"
              className="inline-flex items-center gap-2 rounded-lg bg-forest px-7 py-3 text-sm font-semibold tracking-wide text-cream shadow-card transition-colors duration-200 hover:bg-forest-700"
            >
              {t("ctaPrimary")}
              <ArrowDown size={17} weight="bold" />
            </a>
          </div>

          {/* Trust chips */}
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-forest/20 bg-cream-2 text-forest-700">
                    <Icon size={14} weight="bold" />
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Product visual */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto my-auto h-[94%] w-[94%] rounded-[46%_54%_58%_42%/52%_48%_52%_48%] bg-cream-2" />
          <ProductVisual
            ariaLabel={aria("product")}
            className="mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
