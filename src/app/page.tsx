import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { Ingredients } from "@/components/landing/ingredients";
import { Pricing } from "@/components/landing/pricing";
import { OrderForm } from "@/components/landing/order-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Ingredients />
      <Pricing />
      <OrderForm />
    </>
  );
}
