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
import { CartDrawer } from "@/components/cart/cart-drawer";

export interface CartItem {
  id: string;
  label: string;
  qty: number;
  price: number;
}

interface CartContextValue {
  count: number;
  items: CartItem[];
  total: number;
  addItem: (id: string, label: string, price: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((id: string, label: string, price: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { id, label, price, qty: 1 }];
    });
    setIsOpen(true);
    toast.success(`Adăugat în coș: ${label}`, {
      description: "Vezi detaliile comenzii în coș.",
      position: "bottom-right",
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items],
  );

  const total = useMemo(
    () => items.reduce((acc, i) => acc + i.qty * i.price, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      count,
      items,
      total,
      addItem,
      removeItem,
      setQty,
      clearCart,
      isOpen,
      openCart,
      closeCart,
    }),
    [
      count,
      items,
      total,
      addItem,
      removeItem,
      setQty,
      clearCart,
      isOpen,
      openCart,
      closeCart,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
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

