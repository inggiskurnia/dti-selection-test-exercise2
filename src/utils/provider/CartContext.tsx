"use client";

import { EventItem } from "@/components/Event/EventCard";
import { createContext, FC, ReactNode, useContext, useState } from "react";

// create cart context

interface CartContextType {
  cart: EventItem[];
  addCart: (item: EventItem) => void;
  removeCart: (itemId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// create cart provider
interface CartProviderProps {
  children: ReactNode;
}

interface EventCart {
  item: EventItem;
  total: number;
  price: number;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<EventItem[]>([]);

  const addCart = (item: EventItem) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };

  const removeCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// create cart function

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be inside of CartPRovider");
  } else {
    return context;
  }
};
