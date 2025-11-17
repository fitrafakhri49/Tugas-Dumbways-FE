import { useState } from "react";
import type { Product } from "../types/cart";
import { CartContext } from "./CartContext";
// import { api } from "@/services/api";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [idCounter, setIdCounter] = useState(1);

  const createCart = (title: string, description: string, image: string) => {
    setLoading(true);
    const newCart: Product = { id: idCounter, title, description, quantity: 1, image };
    setCarts((prev) => [newCart, ...prev]);
    setIdCounter((prev) => prev + 1);
    setTimeout(() => setLoading(false), 500);
  };


  const deleteCart = (id: number) => {
    setLoading(true);
    setCarts((prev) => prev.filter((cart) => cart.id !== id));
    setTimeout(() => setLoading(false), 500);
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id ? { ...cart, quantity: quantity < 1 ? 1 : quantity } : cart
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ carts, createCart, updateCartQuantity, deleteCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};
