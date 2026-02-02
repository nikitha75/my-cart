"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <Link href="/products">Home</Link>

      <Link href="/cart" className="relative">
        <span>Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-xs rounded-full px-2">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
