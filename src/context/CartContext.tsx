'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

const CART_STORAGE_KEY = 'vcom-cart';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  colour?: string;
  size?: string;
  seller?: string;
  productNumber?: string;
  shippingDays?: string;
  shippingCost?: number;
};

/** Product data from ProductCard / product list - maps to CartItem */
export type AddToCartProduct = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
};

type CartContextValue = {
  cartItems: CartItem[];
  addToCart: (product: AddToCartProduct) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function toNumericId(id: string | number): number {
  const n = typeof id === 'string' ? parseInt(id, 10) : id;
  return Number.isNaN(n) ? Math.abs(Date.now() % 1e9) : n;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCartItems(loadCartFromStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveCartToStorage(cartItems);
    }
  }, [cartItems, hydrated]);

  const addToCart = useCallback((product: AddToCartProduct) => {
    const numericId = toNumericId(product.id);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === numericId);
      if (existing) {
        return prev.map((item) =>
          item.id === numericId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const newItem: CartItem = {
        id: numericId,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity: 1,
        image: product.image,
        colour: 'Black',
        size: 'M',
        seller: 'Urbantech',
        productNumber: `P${numericId}`,
        shippingDays: '3-4',
        shippingCost: 10,
      };
      return [...prev, newItem];
    });
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({ cartItems, addToCart, updateQuantity, removeItem }),
    [cartItems, addToCart, updateQuantity, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
