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
    default: "Suellen Nails | Estúdio de Unhas e Podologia",
    template: "%s | Suellen Nails",
  },
  description:
    "Especialista em Unhas, Esmaltação em Gel e Cuidado dos Pés em Paracatu - MG. Agende seu horário online de forma rápida e prática.",
  keywords: [
    "Suellen Nails",
    "unhas Paracatu",
    "manicure Paracatu",
    "alongamento de unhas",
    "esmaltação em gel",
    "pedicure Paracatu",
    "agendamento de unhas",
  ],
  authors: [{ name: "Suellen Nails" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Suellen Nails | Estúdio de Unhas e Podologia",
    description:
      "Agende seu serviço de unhas de forma simples e rápida via WhatsApp.",
    url: "https://suellen-nails.vercel.app",
    siteName: "Suellen Nails",
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
