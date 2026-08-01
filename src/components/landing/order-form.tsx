"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  CheckCircle,
  CreditCard,
  Lock,
  PhoneCall,
  Truck,
  CaretDown,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useCart } from "@/components/cart/cart-provider";

const ASSURANCE_ICONS = [Lock, Truck, CreditCard];

const initialForm = {
  nume: "",
  telefon: "",
  email: "",
  tara: "România",
  oras: "România",
  adresa: "",
  codPostal: "0000",
};

export function OrderForm() {
  const { total, count, clearCart } = useCart();
  const t = useTranslations("order");
  const cartT = useTranslations("cart");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [placed, setPlaced] = useState({ total: 0, count: 0 });
  const assurances = t.raw("assurances") as string[];

  function validate() {
    const next: Partial<typeof initialForm> = {};
    if (form.nume.trim().length < 3) next.nume = t("errorNume");
    if (form.telefon.trim().replace(/\D/g, "").length < 7) next.telefon = t("errorTelefon");
    if (form.adresa.trim().length < 10) next.adresa = t("errorAdresa");
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error(t("errorTitle"), { description: t("errorDesc") });
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setPlaced({ total, count });
    clearCart();
    setStatus("success");
    toast.success(cartT("toastOrder"), { description: cartT("toastOrderDesc") });
  }

  const set = (key: keyof typeof initialForm) => (value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  if (status === "success") {
    return (
      <section id="comanda" className="relative overflow-hidden border-t border-cream-3">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
          <div className="mx-auto max-w-xl border border-leaf/40 bg-leaf-soft p-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
              <CheckCircle size={30} weight="fill" />
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold text-forest-900">
              {t("successTitle", { name: form.nume.trim() })}
            </h2>
            <p className="mt-2 text-ink-soft">{t("successSub")}</p>
            <div className="mt-5 flex items-center justify-center gap-2 bg-forest px-5 py-3 text-left text-sm text-cream">
              <PhoneCall size={20} weight="fill" />
              <p>
                <strong>{t("operatorTitle")}</strong>{" "}
                {t("operatorText", { phone: form.telefon.trim(), city: form.oras })}
              </p>
            </div>
            {placed.count > 0 && (
              <p className="mt-4 text-sm text-ink-soft">
                {t("summaryLine", { count: placed.count, total: placed.total })}
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setStatus("idle");
              }}
              className="mt-6 rounded-[5px] bg-forest px-6 py-3 text-cream hover:bg-forest-700"
            >
              {t("another")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="comanda" className="relative min-h-[18.75rem] overflow-hidden border-t border-cream-3">
      <Image
        src="/proctorex/proctorex-leaf-branch.png"
        alt=""
        width={1050}
        height={1498}
        unoptimized
        className="pointer-events-none absolute -bottom-3 -left-3 w-[13.75rem] opacity-65"
      />
      <Image
        src="/proctorex/proctorex-leaf-branch.png"
        alt=""
        width={1050}
        height={1498}
        unoptimized
        className="pointer-events-none absolute -bottom-3 -right-3 w-[13.75rem] scale-x-[-1] opacity-65"
      />

      <div className="relative mx-auto max-w-[760px] px-6 py-2.5 md:px-8 md:py-2.5">
        <div className="text-center">
          <h2 className="font-display text-[1.7rem] italic font-semibold leading-tight text-forest-900 md:text-[1.85rem]">
            {t("title")}
          </h2>
          <p className="mt-1 text-[13px] text-ink">{t("subtext")}</p>
        </div>

        <form onSubmit={onSubmit} noValidate className="mx-auto mt-1 max-w-[606px]">
          <div className="grid grid-cols-2 items-start gap-2">
            <Field label={t("fieldNume")} id="nume" error={errors.nume}>
              <input
                id="nume"
                name="nume"
                autoComplete="name"
                placeholder={t("fieldNume")}
                value={form.nume}
                onChange={(event) => set("nume")(event.target.value)}
                className={inputClass(Boolean(errors.nume))}
              />
            </Field>

            <Field label={t("fieldAdresa")} id="adresa" error={errors.adresa} className="row-span-3">
              <textarea
                id="adresa"
                name="adresa"
                rows={5}
                autoComplete="street-address"
                placeholder={t("fieldAdresa")}
                value={form.adresa}
                onChange={(event) => set("adresa")(event.target.value)}
                className={`${inputClass(Boolean(errors.adresa))} h-[7.2rem] resize-none`}
              />
            </Field>

            <Field label={t("fieldTelefon")} id="telefon" error={errors.telefon}>
              <div className="flex gap-2">
                <span className="flex h-9 w-[5.8rem] shrink-0 items-center justify-between border border-cream-3 bg-white px-3 text-xs text-ink">
                  {t("fieldTelefon")}
                  <CaretDown size={11} />
                </span>
                <span className="flex h-9 w-[3.2rem] shrink-0 items-center justify-center border border-cream-3 bg-white text-xs text-ink">
                  +40
                </span>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  autoComplete="tel"
                  placeholder={t("phTelefon")}
                  value={form.telefon}
                  onChange={(event) => set("telefon")(event.target.value)}
                  className={inputClass(Boolean(errors.telefon))}
                />
              </div>
            </Field>

            <Field label={t("fieldEmail")} id="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => set("email")(event.target.value)}
                placeholder={t("fieldEmail")}
                className={inputClass(false)}
              />
            </Field>
          </div>

          <input type="hidden" name="tara" value={form.tara} readOnly />
          <input type="hidden" name="oras" value={form.oras} readOnly />
          <input type="hidden" name="codPostal" value={form.codPostal} readOnly />

          <ul className="mt-2 grid gap-2 text-[11px] text-ink sm:grid-cols-3 sm:gap-3">
            {assurances.slice(0, 3).map((label, index) => {
              const Icon = ASSURANCE_ICONS[index];
              return (
                <li key={label} className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <Icon size={17} weight="regular" className="shrink-0 text-forest" />
                  {label}
                </li>
              );
            })}
          </ul>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mx-auto mt-5 flex h-11 min-w-[255px] items-center justify-center gap-2 rounded-[5px] bg-forest px-7 text-[16px] text-cream shadow-card transition-colors duration-200 hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
                {t("submitting")}
              </>
            ) : (
              <>
                <Lock size={19} weight="regular" />
                {t("submit")}
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-[10px] font-semibold text-red-700" role="alert">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `h-9 w-full rounded-[3px] border bg-white px-3 py-2 text-xs text-ink placeholder:text-ink-soft/65 transition-colors duration-200 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/25 ${hasError ? "border-red-400" : "border-cream-3"}`;
}
