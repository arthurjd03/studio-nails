"use client"

import { Service } from "@/types/service";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface CartContextValue {
  services: Service[];
  addService: (service: Service) => void;
  removeService: (id: number) => void;
  hasService: (id: number) => boolean;
  clearCart: () => void;
  total: number;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addService = useCallback((service: Service) => {
    setServices((prev) =>
      prev.some((s) => s.id === service.id) ? prev : [...prev, service],
    );
  }, []);

  const removeService = useCallback((id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  }, []);

  const hasService = useCallback(
    (id: number) => services.some((service) => service.id === id),
    [services],
  );

  const clearCart = useCallback(() => setServices([]), []);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const total = useMemo(
    () => services.reduce((sum, service) => sum + service.price, 0),
    [services],
  );

  const value = useMemo(
    () => ({
      services,
      addService,
      removeService,
      hasService,
      clearCart,
      total,
      isOpen,
      openModal,
      closeModal,
    }),
    [
      services,
      addService,
      removeService,
      hasService,
      clearCart,
      total,
      isOpen,
      openModal,
      closeModal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
