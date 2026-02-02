"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import UpdateCartButton from "./UpdateCartButton";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border border-gray-300 p-4 rounded">
      <Image
        src={item.image}
        alt={item.title}
        width={80}
        height={80}
        className="object-contain"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">₹{item.price}</p>
        <UpdateCartButton product={item} />
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
