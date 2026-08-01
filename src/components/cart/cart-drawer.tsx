"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Basket, X, Plus, Minus, Trash, ArrowRight } from "@phosphor-icons/react";
import { useCart } from "@/components/cart/cart-provider";

export function CartDrawer() {
  const {
    items,
    count,
    total,
    isOpen,
    closeCart,
    setQty,
    removeItem,
  } = useCart();
  const reduce = useReducedMotion();

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  function checkout() {
    closeCart();
    document.querySelector("#comanda")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      (document.getElementById("nume") as HTMLInputElement | null)?.focus();
    }, 450);
  }

  const ease: [number, number, number, number] | "linear" = reduce
    ? "linear"
    : [0.23, 1, 0.32, 1];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Coșul tău">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-forest-950/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-cream-3 bg-cream shadow-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduce ? 0.2 : 0.34, ease }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-cream-3 px-6 py-5">
              <h2 className="font-display flex items-center gap-2.5 text-xl font-bold text-forest-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
                  <Basket size={18} weight="bold" />
                </span>
                Coșul tău ({count})
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Închide coșul"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-3 text-ink-soft transition-colors hover:bg-cream-2 hover:text-forest-900"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                    <Basket size={30} weight="duotone" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-forest-900">
                      Coșul tău este gol
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      Adaugă un produs din secțiunea Prețuri pentru a începe
                      comanda.
                    </p>
                  </div>
                  <a
                    href="#preturi"
                    onClick={closeCart}
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-forest-600"
                  >
                    Vezi prețuri
                    <ArrowRight size={16} weight="bold" />
                  </a>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25, ease }}
                        className="rounded-2xl border border-cream-3 bg-white/60 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display font-bold text-forest-900">
                              {item.label}
                            </p>
                            <p className="text-sm text-ink-soft">
                              {item.price} lei / buc
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Elimină ${item.label} din coș`}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-cream-3 bg-cream p-1">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty - 1)}
                              aria-label="Scade cantitatea"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-cream-3"
                            >
                              <Minus size={14} weight="bold" />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-forest-900">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty + 1)}
                              aria-label="Crește cantitatea"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-cream-3"
                            >
                              <Plus size={14} weight="bold" />
                            </button>
                          </div>
                          <p className="font-display text-base font-bold text-forest">
                            {item.qty * item.price} lei
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-cream-3 bg-cream-2 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-soft">
                    Total
                  </span>
                  <span className="font-display text-2xl font-bold text-forest-900">
                    {total} lei
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-soft">
                  {total >= 250
                    ? "Beneficiezi de transport gratuit."
                    : "Transport gratuit la comenzi peste 250 lei."}
                </p>
                <button
                  type="button"
                  onClick={checkout}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-bold text-cream shadow-card transition-all duration-200 hover:bg-forest-600 active:scale-[0.97]"
                >
                  Finalizează comanda
                  <ArrowRight size={18} weight="bold" />
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
