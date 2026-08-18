"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
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
  add: (slug: string) => Promise<boolean>;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_EVENT = "zelda-cart";

function parseEntries(raw: string): CartEntry[] {
  try {
    const parsed = JSON.parse(raw) as CartEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.slug === "string")
      .map((item) => ({
        slug: item.slug,
        quantity: Math.max(1, Number(item.quantity) || 1),
      }));
  } catch {
    return [];
  }
}

function getCartSnapshot() {
  try {
    return localStorage.getItem(CART_STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function getServerCartSnapshot() {
  return "[]";
}

function subscribeCart(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CART_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CART_EVENT, onStoreChange);
  };
}

function writeCart(entries: CartEntry[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(
    subscribeCart,
    getCartSnapshot,
    getServerCartSnapshot,
  );
  const ready = useSyncExternalStore(
    subscribeCart,
    () => true,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const entries = useMemo(() => parseEntries(raw), [raw]);

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

  const add = useCallback(async (slug: string) => {
    const work = getWork(slug);
    if (!work || work.soldOut || work.print) return false;
    try {
      const res = await fetch(`/api/inventory?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = (await res.json()) as { sold?: boolean; print?: boolean };
        if (data.sold || data.print) return false;
      }
    } catch {
      // Checkout still blocks a second sale if this check cannot run.
    }
    const current = parseEntries(getCartSnapshot());
    if (current.some((item) => item.slug === slug)) {
      setOpen(true);
      return true;
    }
    writeCart([...current, { slug, quantity: 1 }]);
    setOpen(true);
    return true;
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    const current = parseEntries(getCartSnapshot());
    if (quantity < 1) {
      writeCart(current.filter((item) => item.slug !== slug));
      return;
    }
    writeCart(
      current.map((item) => (item.slug === slug ? { ...item, quantity: 1 } : item)),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    writeCart(parseEntries(getCartSnapshot()).filter((item) => item.slug !== slug));
  }, []);

  const clear = useCallback(() => writeCart([]), []);

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
