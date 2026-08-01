import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/routing";
import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { OrderForm } from "@/components/landing/order-form";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <OrderForm />
    </>
  );
}
