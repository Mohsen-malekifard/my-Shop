"use client";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-2xl shadow p-4 hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-xl w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-green-600 font-bold mb-4">
        {product.price.toLocaleString()} تومان
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl w-full"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}