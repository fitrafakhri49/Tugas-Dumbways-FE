import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { carts, deleteCart, updateCartQuantity } = useCart(); // new function

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl mb-4 font-bold">Cart</h1>

      {carts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="w-full max-w-md space-y-4">
          {carts.map((item, index) => (
            <li
              key={index}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="mb-2 font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <Button
                    onClick={() =>
                      updateCartQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    onClick={() =>
                      updateCartQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>

                <Button
                  className="cursor-pointer bg-red-600 mt-3"
                  onClick={() => deleteCart(item.id)}
                >
                  Delete
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="ml-3 w-full h-full object-cover rounded"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
