import ProductCard from "./components/ProductCard";
import products from "./lib/products";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/cart" className="block text-right text-blue-600 hover:underline mb-4">
        🛒 مشاهده سبد خرید
      </Link>
      <h1 className="text-3xl font-bold mb-8 text-center">فروشگاه ما</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
