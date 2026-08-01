import {
  Truck,
  ShieldCheck,
  ArrowCounterClockwise,
  LockKeyOpen,
} from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import { ProductVisual } from "@/components/landing/product-visual";

const TRUST_ICONS = [Truck, ShieldCheck, ArrowCounterClockwise];

export async function Hero() {
  const t = await getTranslations("hero");
  const brand = await getTranslations("brand");
  const aria = await getTranslations("aria");
  const trust = t.raw("trust") as string[];
  const [bodyFirst, bodySecond] = t("body").split(/ (?=Formulă|Formula|Формула|Fórmula)/);

  return (
    <section id="despre" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1320px] items-center gap-4 px-6 pb-7 pt-5 md:grid-cols-[0.88fr_1.12fr] md:gap-1 md:px-12 md:pb-8">
        {/* Copy */}
        <div className="max-w-xl md:translate-y-5">
          <h1 className="font-display text-[3.65rem] font-semibold leading-[0.92] tracking-[-0.045em] text-forest-900 sm:text-[4.25rem] md:text-[4.08rem]">
            {brand("name")}
          </h1>
          <p className="font-display mt-2 text-[1.9rem] italic leading-[1.06] text-forest sm:text-[2.15rem]">
            {t("title1")} {t("title2")}
          </p>
          <div className="mt-7 max-w-[400px] text-[15px] leading-[1.68] text-ink md:text-[16px]">
            <p>{bodyFirst}</p>
            {bodySecond && <p className="mt-4">{bodySecond}</p>}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#preturi"
              className="inline-flex h-12 w-[16.25rem] items-center justify-center gap-2 rounded-[5px] bg-forest px-5 text-[16px] text-cream shadow-card transition-colors duration-200 hover:bg-forest-700"
            >
              <LockKeyOpen size={20} weight="regular" />
              {t("ctaPrimary")}
            </a>
          </div>

          {/* Trust chips */}
          <ul className="mt-6 flex flex-wrap items-center divide-x divide-cream-3">
            {trust.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li
                  key={label}
                  className="flex items-center gap-1.5 whitespace-nowrap px-2 first:pl-0 text-[12px] text-ink"
                >
                  <Icon size={18} weight="regular" className="text-forest" />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Product visual */}
        <div className="relative -mr-4 md:-mr-10">
          <div className="absolute -right-[8%] top-[-1rem] h-[21rem] w-[106%] rounded-[48%_52%_56%_44%/47%_45%_55%_53%] bg-cream-2" />
          <div className="absolute bottom-1 left-[4%] z-0 h-[8.1rem] w-[104%] rounded-[50%] border border-stone-dark/60 bg-stone shadow-[0_25px_30px_-24px_rgba(27,43,34,0.5)]" />
          <ProductVisual
            ariaLabel={aria("product")}
            className="mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
