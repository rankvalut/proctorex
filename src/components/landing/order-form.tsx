"use client";

import { useState, type FormEvent } from "react";
import {
  PaperPlaneTilt,
  CheckCircle,
  PhoneCall,
  Lock,
  Package,
  Truck,
  ShieldCheck,
  Basket,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { useCart } from "@/components/cart/cart-provider";

const ASSURANCES = [
  { icon: Package, label: "Ambalaj neutru și discret" },
  { icon: Truck, label: "Livrare rapidă în toată România" },
  { icon: ShieldCheck, label: "Plată sigură — Card sau Ramburs" },
  { icon: Lock, label: "Datele tale rămân confidențiale" },
];

const initialForm = {
  nume: "",
  telefon: "",
  tara: "România",
  oras: "",
  adresa: "",
  codPostal: "",
};

export function OrderForm() {
  const { items, total, count, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [placed, setPlaced] = useState<{ total: number; count: number }>({
    total: 0,
    count: 0,
  });

  function validate() {
    const next: Partial<typeof initialForm> = {};
    if (form.nume.trim().length < 3) {
      next.nume = "Te rugăm să introduci numele complet.";
    }
    if (form.telefon.trim().replace(/\D/g, "").length < 7) {
      next.telefon = "Introdu un număr de telefon valid.";
    }
    if (form.tara.trim().length < 2) {
      next.tara = "Te rugăm să introduci țara.";
    }
    if (form.oras.trim().length < 2) {
      next.oras = "Te rugăm să introduci orașul.";
    }
    if (form.adresa.trim().length < 10) {
      next.adresa = "Introdu adresa completă de livrare.";
    }
    if (form.codPostal.trim().replace(/[^a-z0-9]/gi, "").length < 4) {
      next.codPostal = "Introdu un cod poștal valid.";
    }
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Verifică câmpurile marcate.", {
        description: "Unele informații nu sunt complete sau sunt invalide.",
      });
      return;
    }

    setStatus("submitting");
    // Demo submission — connect this to your order backend / API route.
    await new Promise((r) => setTimeout(r, 900));
    setPlaced({ total, count });
    clearCart();
    setStatus("success");
    toast.success("Comanda a fost trimisă!", {
      description: "Un operator te va suna în curând pentru confirmare.",
    });
  }

  const set = (key: keyof typeof initialForm) => (v: string) => {
    setForm((f) => ({ ...f, [key]: v }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  if (status === "success") {
    return (
      <section id="comanda" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="mx-auto max-w-xl rounded-blob border border-leaf/40 bg-leaf-soft p-10 text-center shadow-soft">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream">
                <CheckCircle size={32} weight="fill" />
              </span>
              <h2 className="font-display mt-6 text-3xl font-bold text-forest-900">
                Mulțumim, {form.nume.trim()}!
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Comanda ta a fost înregistrată cu succes.
              </p>

              {/* Operator call notice */}
              <div className="mt-5 flex items-center justify-center gap-2.5 rounded-2xl bg-forest px-5 py-4 text-cream">
                <PhoneCall size={22} weight="fill" />
                <p className="text-left text-sm leading-snug">
                  <strong>Un operator te va suna în scurt timp</strong> la{" "}
                  <strong>{form.telefon.trim()}</strong> pentru a confirma
                  comanda și detaliile de livrare către{" "}
                  <strong>{form.oras.trim()}</strong>.
                </p>
              </div>

              {placed.count > 0 && (
                <div className="mt-5 rounded-2xl border border-cream-3 bg-white/60 px-5 py-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wide text-leaf-600">
                    Rezumatul comenzii
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {placed.count} {placed.count === 1 ? "produs" : "produse"} —
                    total <strong className="text-forest-900">{placed.total} lei</strong>
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setStatus("idle");
                }}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-bold text-cream transition-colors duration-200 hover:bg-forest-600 active:scale-[0.97]"
              >
                Trimite o altă comandă
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="comanda" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div>
            <Eyebrow>Comandă</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              Comandă rapid și discret
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
              Completează formularul, iar un operator te va suna pentru a
              confirma comanda. Fără cont, fără pași complicați.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {ASSURANCES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm font-semibold text-ink-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                    <Icon size={18} weight="bold" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-blob border border-cream-3 bg-cream p-7 shadow-card md:p-9"
          >
            {/* Cart summary */}
            <div className="mb-6 rounded-2xl border border-cream-3 bg-cream-2 px-5 py-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-leaf-600">
                <Basket size={15} weight="bold" />
                Comanda ta
              </p>
              {items.length === 0 ? (
                <p className="mt-1.5 text-sm text-ink-soft">
                  Nu ai adăugat încă produse în coș. Poți alege din secțiunea{" "}
                  <a href="#preturi" className="font-semibold text-forest underline underline-offset-2">
                    Prețuri
                  </a>
                  .
                </p>
              ) : (
                <>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between text-sm text-ink-soft"
                      >
                        <span>
                          {item.label}{" "}
                          <span className="text-leaf-600">× {item.qty}</span>
                        </span>
                        <span className="font-semibold text-forest-900">
                          {item.qty * item.price} lei
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center justify-between border-t border-cream-3 pt-2">
                    <span className="text-sm font-bold text-forest-900">
                      Total ({count} {count === 1 ? "produs" : "produse"})
                    </span>
                    <span className="font-display text-lg font-bold text-forest">
                      {total} lei
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="grid gap-5">
              <Field label="Nume complet" id="nume" error={errors.nume}>
                <input
                  id="nume"
                  name="nume"
                  autoComplete="name"
                  value={form.nume}
                  onChange={(e) => set("nume")(e.target.value)}
                  className={inputClass(!!errors.nume)}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Telefon" id="telefon" error={errors.telefon}>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder="07xx xxx xxx"
                    value={form.telefon}
                    onChange={(e) => set("telefon")(e.target.value)}
                    className={inputClass(!!errors.telefon)}
                  />
                </Field>
                <Field label="Țară" id="tara" error={errors.tara}>
                  <input
                    id="tara"
                    name="tara"
                    autoComplete="country-name"
                    value={form.tara}
                    onChange={(e) => set("tara")(e.target.value)}
                    className={inputClass(!!errors.tara)}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Oraș" id="oras" error={errors.oras}>
                  <input
                    id="oras"
                    name="oras"
                    autoComplete="address-level2"
                    value={form.oras}
                    onChange={(e) => set("oras")(e.target.value)}
                    className={inputClass(!!errors.oras)}
                  />
                </Field>
                <Field label="Cod poștal" id="codPostal" error={errors.codPostal}>
                  <input
                    id="codPostal"
                    name="codPostal"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    value={form.codPostal}
                    onChange={(e) => set("codPostal")(e.target.value)}
                    className={inputClass(!!errors.codPostal)}
                  />
                </Field>
              </div>

              <Field label="Adresă de livrare" id="adresa" error={errors.adresa}>
                <textarea
                  id="adresa"
                  name="adresa"
                  rows={3}
                  autoComplete="street-address"
                  placeholder="Stradă, număr, bloc, scară, apartament"
                  value={form.adresa}
                  onChange={(e) => set("adresa")(e.target.value)}
                  className={`${inputClass(!!errors.adresa)} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-base font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
                    Se trimite…
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt size={19} weight="bold" />
                    Trimite Comanda
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-ink-soft">
                Prin trimiterea comenzii ești de acord cu{" "}
                <a href="#termeni" className="font-semibold text-forest underline underline-offset-2">
                  termenii și condițiile
                </a>
                .
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-bold text-forest-900"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-2xl border bg-white/70 px-4 py-3 text-ink placeholder:text-ink-soft/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest/40 ${
    hasError ? "border-red-400" : "border-cream-3 focus:border-forest"
  }`;
}
