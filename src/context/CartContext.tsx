"use client"

import { Service } from "@/types/service";
import { createContext, useState, useContext, ReactNode } from "react";

type CartContextType = {
  services: Service[];
  adicionar: (service: Service) => void;
  remover: (id: number) => void;
  verificar: (id: number) => boolean;
  zerar: () => void;
  isOpen: boolean
  abrirModal: () => void
  fecharModal: () => void
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart deve ser usado dentro do CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<Service[]>([]);
  const [ isOpen, setIsOpen ] = useState(false)


  const adicionar = (service: Service) => {
    setServices((prev) =>[...prev, service]);
  };
  const remover = (id: number) => {
    setServices((remove) => remove.filter((item) => item.id !== id));
  };
  const verificar = (id: number) => {
    return services.some((item) => item.id === id);
  };
  const zerar = () => {
    setServices([]);
  };
  const abrirModal = () => {
    setIsOpen(true)
  }
  const fecharModal = () => {
    setIsOpen(false)
  }
  return (
    <CartContext.Provider
      value={{ services, adicionar, remover, verificar, zerar, abrirModal, fecharModal, isOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}
