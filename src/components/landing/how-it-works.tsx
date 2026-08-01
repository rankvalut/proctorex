import {
  Flame,
  ShieldStar,
  FlowerTulip,
  DropHalf,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const STEP_ICONS = [Flame, ShieldStar, FlowerTulip];

export async function HowItWorks() {
  const t = await getTranslations("howItWorks");
  const steps = t.raw("steps") as { title: string; text: string }[];
  const usage = t.raw("usage") as string[];

  return (
    <section id="cum-functioneaza" className="relative overflow-hidden">
      {/* decorative leaves */}
      <div className="pointer-events-none absolute -left-10 top-10 opacity-30">
        <svg viewBox="0 0 120 120" className="w-36" fill="none" aria-hidden="true">
          <path d="M96 6C84 26 66 58 22 112" stroke="#5f8d70" strokeOpacity="0.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M86 24c-14-4-25-12-30-22 15-2 27 5 30 22Z" fill="#84ac90" />
          <path d="M70 44c-15-1-28-7-35-16 14-5 28 0 35 16Z" fill="#84ac90" opacity="0.7" />
          <path d="M54 64c-14 1-27-3-35-11 12-6 27-4 35 11Z" fill="#84ac90" opacity="0.5" />
        </svg>
      </div>

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

        {/* Mechanism steps */}
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* connector line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-linear-to-r from-transparent via-leaf/50 to-transparent md:block"
          />
          {steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            const step = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={step} delay={i * 0.1} className="flex">
                <div className="relative flex h-full flex-col rounded-blob border border-cream-3 bg-cream p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700">
                      <Icon size={28} weight="bold" />
                    </span>
                    <span className="font-display text-4xl font-bold text-cream-3">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-forest-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Usage */}
        <Reveal>
          <div className="mt-12 rounded-blob border border-cream-3 bg-cream p-7 shadow-soft md:p-8">
            <h3 className="font-display flex items-center gap-2.5 text-xl font-bold text-forest-900">
              <DropHalf size={24} weight="bold" className="text-forest-600" />
              {t("usageTitle")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {usage.map((u) => (
                <li
                  key={u}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                    <Check size={12} weight="bold" />
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
