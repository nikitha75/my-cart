"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Link
      href={`/products/${product.id}`}
      className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />
      <h2 className="text-lg font-bold mt-2 truncate">{product.title}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      {isInCart ? (
        <button className="mt-3 w-full py-2 rounded text-white transition bg-gray-400 cursor-not-allowed">
          Added
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full py-2 rounded text-white transition bg-blue-600 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </Link>
  );
};

export default ProductCard;
