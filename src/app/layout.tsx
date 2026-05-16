import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Great_Vibes } from "next/font/google"
import { CartProvider } from "@/context/CartContext";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title"
})

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
})

export const metadata: Metadata = {
  title: "Suellen Nails",
  description: "Unhas de qualidade com estilo. Agende seu horário com Suellen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${greatVibes.variable}`}>
      <CartProvider>
        {children}
      </CartProvider>
      </body>

    </html>
  );
}
