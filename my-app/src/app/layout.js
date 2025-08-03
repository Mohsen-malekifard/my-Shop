import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "فروشگاه",
  description: "فروشگاه با Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}