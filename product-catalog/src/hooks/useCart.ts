import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export const useCart=()=>{
    const context=useContext(CartContext);
    if(!context){
        throw new Error("useTodo must be used within a provider")
    }
    return context
}