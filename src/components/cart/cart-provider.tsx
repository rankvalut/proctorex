"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Toaster, toast } from "sonner";

interface CartItem {
  id: string;
  label: string;
  qty: number;
}

interface CartContextValue {
  count: number;
  items: CartItem[];
  addItem: (id: string, label: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((id: string, label: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { id, label, qty: 1 }];
    });
    toast.success(`Adăugat în coș: ${label}`, {
      description: "Produsul a fost adăugat cu succes.",
      position: "bottom-right",
    });
  }, []);

  const count = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items],
  );

  const value = useMemo(
    () => ({ count, items, addItem }),
    [count, items, addItem],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#fbf6ec",
            color: "#1b2b22",
            border: "1px solid #efe4cf",
            borderRadius: "14px",
            fontFamily: "var(--font-nunito-sans), sans-serif",
          },
        }}
      />
    </CartContext.Provider>
  );
}
