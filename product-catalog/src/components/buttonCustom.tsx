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
  const [localLoading, setLocalLoading] = useState(false); // loading lokal

  const handleClick = () => {
    setLocalLoading(true);
    setTimeout(() => {
      createCart(product.title, product.description, product.image);
      setAdded(true);
      setLocalLoading(false); 
    }, 1000); 
  };

  return (
    <Button onClick={handleClick} disabled={loading || localLoading}>
      {localLoading ? "Loading..." : added ? "Added" : "Add to Cart"}
    </Button>
  );
}
