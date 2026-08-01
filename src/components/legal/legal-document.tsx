import { ArrowLeft, Scroll } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const DOCS = [
  { slug: "politica-de-confidentialitate", key: "privacy" },
  { slug: "termeni-si-conditii", key: "terms" },
  { slug: "nota-medicala", key: "disclaimer" },
  { slug: "politica-cookie", key: "cookies" },
  { slug: "retur", key: "returns" },
] as const;

type DocKey = (typeof DOCS)[number]["key"];

export async function LegalDocument({ docKey }: { docKey: DocKey }) {
  const t = await getTranslations("legal");
  const doc = await getTranslations(`legal.${docKey}`);
  const sections = doc.raw("sections") as { heading: string; body: string[] }[];

  const titles: Record<DocKey, string> = {
    privacy: (await getTranslations("legal.privacy"))("title"),
    terms: (await getTranslations("legal.terms"))("title"),
    disclaimer: (await getTranslations("legal.disclaimer"))("title"),
    cookies: (await getTranslations("legal.cookies"))("title"),
    returns: (await getTranslations("legal.returns"))("title"),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-forest transition-colors hover:text-forest-600"
      >
        <ArrowLeft size={16} weight="bold" />
        {t("backHome")}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* Sidebar nav */}
        <aside>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf-600">
            {t("navTitle")}
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {DOCS.map((d) => {
              const active = d.key === docKey;
              return (
                <li key={d.slug}>
                  <Link
                    href={`/${d.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "block rounded-xl bg-forest px-3.5 py-2.5 text-sm font-bold text-cream"
                        : "block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-cream-2 hover:text-forest"
                    }
                  >
                    {titles[d.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Document */}
        <article className="rounded-blob border border-cream-3 bg-cream p-7 shadow-soft md:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700">
            <Scroll size={24} weight="bold" />
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-forest-900 md:text-4xl">
            {doc("title")}
          </h1>
          <p className="mt-2 text-sm font-semibold text-ink-soft/70">
            {t("updatedOn")}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {doc("intro")}
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-bold text-forest-900">
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-2 leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
