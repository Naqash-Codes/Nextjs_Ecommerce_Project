"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Product = {
  id: number;
  name: string;
  slug: string;
  img: string | string[];
  actPrice: number;
  disPrice?: number;
  stock: number;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  getItemQuantity: (id: number) => number;

  // 🔥 NEW
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity >= product.stock) return prev;

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔥 TOTAL COUNT (for navbar badge)
  const totalCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // 🔥 TOTAL PRICE (for checkout)
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.disPrice ?? item.actPrice;
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        getItemQuantity,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};