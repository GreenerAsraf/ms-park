"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./mock-data";

export type CartItem = {
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, selectedSize: string, selectedColor?: string, quantity?: number) => void;
  removeItem: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, delta: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mspark_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mspark_cart", JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: Product, selectedSize: string, selectedColor?: string, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          selectedSize,
          selectedColor: selectedColor || product.colors?.[0],
          quantity,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, selectedSize: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize))
    );
  };

  const updateQuantity = (productId: string, selectedSize: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === selectedSize) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        totalCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
