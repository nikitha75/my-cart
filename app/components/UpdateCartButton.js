"use client";
import { useCart } from "../context/CartContext";

const UpdateCartButton = ({ product }) => {
  const { cart, addToCart, decrementFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const incrementItem = () => addToCart(product);
  const decrementItem = (productId) => decrementFromCart(productId);

  return (
    <div className="flex items-center space-x-2 mt-4">
      {cartItem ? (
        <>
          <button
            onClick={() => decrementItem(product.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -
          </button>
          <span className="px-2">{cartItem.quantity}</span>
          <button
            onClick={incrementItem}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +
          </button>
        </>
      ) : (
        <button
          onClick={incrementItem}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default UpdateCartButton;
