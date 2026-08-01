import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { LegalDocument } from "@/components/legal/legal-document";

const LEGAL_SLUGS = [
  "politica-de-confidentialitate",
  "termeni-si-conditii",
  "nota-medicala",
  "politica-cookie",
  "retur",
] as const;

type DocKey = "privacy" | "terms" | "disclaimer" | "cookies" | "returns";

const SLUG_TO_KEY: Record<string, DocKey> = {
  "politica-de-confidentialitate": "privacy",
  "termeni-si-conditii": "terms",
  "nota-medicala": "disclaimer",
  "politica-cookie": "cookies",
  retur: "returns",
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    LEGAL_SLUGS.map((legal) => ({ locale, legal })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; legal: string }>;
}) {
  const { locale, legal } = await params;
  const key = SLUG_TO_KEY[legal];
  if (!key) return {};
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: `legal.${key}`,
  });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; legal: string }>;
}) {
  const { locale, legal } = await params;
  setRequestLocale(locale as Locale);

  const key = SLUG_TO_KEY[legal];
  if (!key) notFound();

  return <LegalDocument docKey={key} />;
}
