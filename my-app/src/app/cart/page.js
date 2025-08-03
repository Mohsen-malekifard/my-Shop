"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">سبد خرید</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">سبد خرید خالی است.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            بازگشت به فروشگاه
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-xl shadow"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">
                  تعداد: {item.qty} | قیمت:{" "}
                  {(item.price * item.qty).toLocaleString()} تومان
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                حذف
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl">
            مجموع کل: {totalPrice.toLocaleString()} تومان
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              حذف همه
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
              onClick={() => alert("سفارش ثبت شد!")}
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      )}
    </div>
  );
}