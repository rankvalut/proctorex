import { useTranslations } from "next-intl";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function Benefits() {
  const t = useTranslations("benefits");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="beneficii" className="relative overflow-hidden border-y border-cream-3 bg-cream-2">
      {/* soft botanical illustrations on the far edges */}
      <Image
        src="/proctorex/proctorex-leaf-branch.png"
        alt=""
        width={1050}
        height={1498}
        unoptimized
        className="pointer-events-none absolute -left-2 top-0 w-[11.5rem] opacity-70 md:-left-2 md:w-[11.5rem]"
      />
      <Image
        src="/proctorex/proctorex-leaf-branch.png"
        alt=""
        width={1050}
        height={1498}
        unoptimized
        className="pointer-events-none absolute -right-2 top-0 w-[11.5rem] scale-x-[-1] opacity-70 md:-right-2 md:w-[11.5rem]"
      />

      <div className="mx-auto max-w-[780px] px-6 pb-1 pt-8 text-center md:px-8 md:pb-1 md:pt-8">
        <Reveal>
          <h2 className="font-display text-[1.45rem] font-semibold leading-tight text-forest-900 sm:text-[1.5rem]">
            {t("title")}
          </h2>

          <div className="mx-auto mt-1 max-w-[620px] space-y-2 text-[13px] leading-[1.65]">
            {paragraphs.map((p, index) => {
              const [first, second] = index === 2
                ? p.split(/, (?=cu |with |с |з |con )/)
                : [p, undefined];
              return (
                <p key={p} className="text-ink">
                  {first}
                  {second && (
                    <>
                      ,<br />
                      {second}
                    </>
                  )}
                </p>
              );
            })}
          </div>

          {/* decorative ornament with thin lines */}
          <div className="mt-4 flex items-center justify-center" aria-hidden="true">
            <Image
              src="/proctorex/proctorex-divider.png"
              alt=""
              width={2172}
              height={724}
              unoptimized
              className="h-[2rem] w-[29rem] max-w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
