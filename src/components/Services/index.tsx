"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ServiceCard from "./ServiceCard";
import { nailServices } from "@/constants";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Services() {
  const { addService, removeService, hasService, openModal, services } =
    useCart();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.services}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Serviços</span>
        <h2 className={styles.title}>Monte o seu atendimento</h2>
        <p className={styles.subtitle}>
          Selecione os serviços desejados e envie seu pedido em segundos pelo
          WhatsApp.
        </p>
      </div>
      <ul className={styles.list}>
        {nailServices.map((service, index) => (
          <li
            key={service.id}
            style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
          >
            <ServiceCard
              service={service}
              isSelected={hasService(service.id)}
              onToggle={() =>
                hasService(service.id)
                  ? removeService(service.id)
                  : addService(service)
              }
            />
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.orderBtn}
          disabled={services.length === 0}
          onClick={openModal}
        >
          <ShoppingBag size={18} aria-hidden="true" />
          Criar pedido
          {services.length > 0 ? ` (${services.length})` : ""}
        </button>
        <span className={styles.hint}>
          {services.length === 0
            ? "Selecione ao menos um serviço para continuar"
            : "Você revisa tudo antes de enviar"}
        </span>
      </div>
    </section>
  );
}
