import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
title: {
    default: "Studio Nails | Unhas e Podologia",
    template: "%s | Studio Nails",
  },
  description:
    "Especialista em Unhas, Esmaltação em Gel e Cuidado dos Pés em Paracatu - MG. Agende seu horário online de forma rápida e prática.",
  keywords: [
    "Studio Nails",
    "alongamento de unhas",
    "esmaltação em gel",
    "agendamento de unhas",
  ],
  authors: [{ name: "Studio Nails" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Studio Nails | Unhas e Podologia",
    description:
      "Agende seu serviço de unhas de forma simples e rápida via WhatsApp.",
    url: "https://studio-nails.vercel.app",
    siteName: "Studio Nails",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${greatVibes.variable} antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
