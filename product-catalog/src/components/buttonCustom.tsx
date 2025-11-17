import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types/cart";
import { useState } from "react";

type CartButtonProps = {
  product: Product;
};

export function CartButton({ product }: CartButtonProps) {
  const { createCart, loading } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    createCart(product.title, product.description, product.image);
    setAdded(true); 
  };

  return (
    <Button onClick={handleClick} disabled={loading}>
      {added ? "Added" : "Add to Cart"}
    </Button>
  );
}
