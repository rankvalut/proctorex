import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { HowItWorks } from "@/components/landing/how-it-works";
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
  const t = await getTranslations({ locale, namespace: "howItWorks" });
  return { title: `PROCTOREX — ${t("title")}` };
}

export default async function CumFunctioneazaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);

  return (
    <>
      <HowItWorks />
      <ProductCta />
    </>
  );
}
