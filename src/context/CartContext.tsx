"use client";

import { Service } from "@/types/service";
import { createContext, useState, useContext, ReactNode } from "react";

type CartContextType = {
  services: Service[];
  addService: (service: Service) => void;
  removeService: (id: number) => void;
  hasService: (id: number) => boolean;
  clearCart: () => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addService = (service: Service) => {
    setServices((prev) => [...prev, service]);
  };

  const removeService = (id: number) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  const hasService = (id: number) => {
    return services.some((item) => item.id === id);
  };

  const clearCart = () => {
    setServices([]);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        services,
        addService,
        removeService,
        hasService,
        clearCart,
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
