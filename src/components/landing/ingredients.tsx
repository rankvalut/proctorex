import {
  FlowerLotus,
  Flower,
  Leaf,
  Drop,
  FlowerTulip,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [FlowerLotus, Flower, Leaf, Drop, FlowerTulip, Sparkle];

export async function Ingredients() {
  const t = await getTranslations("ingredients");
  const list = t.raw("list") as { name: string; role: string; extra: string }[];

  return (
    <section id="ingrediente" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-[46ch] leading-relaxed text-ink-soft">
              {t("subtext")}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-bold text-gold-600">
              <Sparkle size={16} weight="fill" />
              {t("badge")}
            </div>
          </div>
        </Reveal>

        {/* Ingredient cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {list.map((ing, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={ing.name} delay={i * 0.07} className="flex">
                <article className="group flex h-full w-full flex-col rounded-blob border border-cream-3 bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={24} weight="bold" />
                    </span>
                    <span className="font-display text-sm font-bold text-cream-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-forest-900">
                    {ing.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-snug text-forest-600">
                    {ing.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {ing.extra}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
