"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link href="/products" className="text-blue-600 underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t border-t-gray-400 pt-4">
        <p className="text-lg font-semibold">Total: ₹{totalPrice.toFixed(2)}</p>

        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Checkout
        </button>
      </div>
    </main>
  );
};

export default Cart;
