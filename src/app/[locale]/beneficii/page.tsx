import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Benefits } from "@/components/landing/benefits";
import { ProductCta } from "@/components/landing/product-cta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "benefits" });
  return { title: `PROCTOREX — ${t("title")}` };
}

export default async function BeneficiiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);

  return (
    <>
      <Benefits />
      <ProductCta />
    </>
  );
}
