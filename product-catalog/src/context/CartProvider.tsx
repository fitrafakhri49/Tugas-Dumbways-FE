import { useState,useEffect } from "react";
import type { Product } from "../types/cart";
import { CartContext } from "./CartContext";
import { api } from "@/services/api";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(()=>{
    const fetchData=async ()=>{
        try {
            const res = await api.get("/products")
            setCarts(res.data)
        } catch (error) {
            console.error("Gagal Fetch Data Produk")
        }finally{
            setLoading(false)
        }
    }
    fetchData()
},[])

  const createCart = (text: string) => {
    setLoading(true);
    const newCart: Product = { id: idCounter, title,description,image };
    setCarts((prev) => [newCart, ...prev]);
    setIdCounter((prev) => prev + 1);
    setTimeout(() => setLoading(false), 500);
  };

  const updateCart = (id: number,text:string) => {
    setLoading(true);
    setCarts((prev) =>
      prev.map((cart) => (cart.id == id ? { ...cart, text } : cart))
    );
    setTimeout(() => setLoading(false), 500);
  };

  const deleteCart = (id: number) => {
    setLoading(true);
    setCarts((prev) => prev.filter((cart) => cart.id !== id));
    setTimeout(() => setLoading(false), 500);
  };

//   const toggleComplete = (id: number) => {
//     setLoading(true);
//     setCarts((prev) =>
//       prev.map(() =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//     setTimeout(() => setLoading(false), 500);
//   };

  return (
    <CartContext.Provider
      value={{ carts, createTodo, updateTodo, deleteTodo, toggleComplete, loading }}
    >
      {children}
    </TodoContext.Provider>
  );
};
