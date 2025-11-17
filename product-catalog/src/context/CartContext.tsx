import { createContext } from "react";
import type { Product } from "../types/cart";

export interface TodoContextType {
  todos: Product[];
  createTodo: (text: string) => void;
  updateTodo: (id:number,text:string) => void;
  deleteTodo: (id: number) => void;
//   toggleComplete: (id: number) => void;
  loading: boolean;
}

export const CartContext = createContext<TodoContextType | null>(null);
