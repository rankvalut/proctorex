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
  const list = t.raw("list") as { name: string; role: string }[];

  return (
    <section id="ingrediente" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
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

        <div className="divide-y divide-cream-4 rounded-blob border border-cream-3 bg-cream shadow-soft">
          {list.map((ing, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={ing.name} delay={i * 0.05}>
                <div className="flex items-center gap-4 px-6 py-5 md:px-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700">
                    <Icon size={22} weight="bold" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest-900">
                      {ing.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {ing.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
