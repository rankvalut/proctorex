import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { Ingredients } from "@/components/landing/ingredients";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { OrderForm } from "@/components/landing/order-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Ingredients />
      <HowItWorks />
      <Pricing />
      <OrderForm />
    </>
  );
}
