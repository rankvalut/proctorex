import { useTranslations } from "next-intl";
import { Leaf, LeafSprig } from "@/components/landing/leaves";
import { Reveal } from "@/components/ui/reveal";

export function Benefits() {
  const t = useTranslations("benefits");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="beneficii" className="relative overflow-hidden bg-cream-2/60">
      {/* soft botanical illustrations on the far edges */}
      <LeafSprig className="pointer-events-none absolute -left-12 top-1/2 h-56 w-56 -translate-y-1/2 text-forest/15 md:-left-16 md:h-72 md:w-72" />
      <LeafSprig className="pointer-events-none absolute -right-12 top-1/2 h-56 w-56 -translate-y-1/2 -scale-x-100 text-forest/15 md:-right-16 md:h-72 md:w-72" />

      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>

          <div className="mt-7 space-y-4">
            {paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-soft md:text-xl">
                {p}
              </p>
            ))}
          </div>

          {/* decorative ornament with thin lines */}
          <div className="mt-10 flex items-center justify-center gap-4" aria-hidden="true">
            <span className="h-px w-14 bg-gold/60 md:w-24" />
            <Leaf className="h-6 w-6 text-forest" />
            <span className="h-px w-14 bg-gold/60 md:w-24" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
