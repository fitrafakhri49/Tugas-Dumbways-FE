import { createContext } from "react";
import type { Product } from "../types/cart";

export interface ProductContextType {
  carts: Product[];
  createCart: (title: string,description:string,image:string) => void;
  deleteCart: (id: number) => void;
  updateCartQuantity:(id:number ,quanityt:number)=>void;
  loading: boolean;
}

export const CartContext = createContext<ProductContextType | null>(null);
