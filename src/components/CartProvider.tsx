"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CART_STORAGE_KEY, type CartEntry } from "@/lib/commerce";
import { formatPrice, getWork, type Work } from "@/data/works";
import { CartDrawer } from "@/components/CartDrawer";

export type CartLine = CartEntry & {
  work: Work;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  ready: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (slug: string) => boolean;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStored(): CartEntry[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.slug === "string")
      .map((item) => ({ slug: item.slug, quantity: Math.max(1, Number(item.quantity) || 1) }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<CartEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEntries(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(entries));
  }, [entries, ready]);

  const lines = useMemo<CartLine[]>(
    () =>
      entries.flatMap((entry) => {
        const work = getWork(entry.slug);
        if (!work || work.print) return [];
        return [{ ...entry, work }];
      }),
    [entries],
  );

  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.work.price * line.quantity, 0),
    [lines],
  );

  const add = useCallback((slug: string) => {
    const work = getWork(slug);
    if (!work || work.soldOut || work.print) return false;
    setEntries((current) => {
      if (current.some((item) => item.slug === slug)) return current;
      return [...current, { slug, quantity: 1 }];
    });
    setOpen(true);
    return true;
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity < 1) {
      setEntries((current) => current.filter((item) => item.slug !== slug));
      return;
    }
    setEntries((current) =>
      current.map((item) => (item.slug === slug ? { ...item, quantity: 1 } : item)),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setEntries((current) => current.filter((item) => item.slug !== slug));
  }, []);

  const clear = useCallback(() => setEntries([]), []);

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      ready,
      open,
      setOpen,
      add,
      setQuantity,
      remove,
      clear,
    }),
    [lines, count, subtotal, ready, open, add, setQuantity, remove, clear],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function money(amount: number) {
  return formatPrice(amount);
}
