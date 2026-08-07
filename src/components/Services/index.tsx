"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ServiceCard from "./ServiceCard";
import { nailServices } from "@/constants";
import { useCart } from "@/context/CartContext";

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
      <small className={styles.label}>Serviços e Valores</small>
      <h2 className={styles.title}>Escolha o seu cuidado</h2>
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
      <button
        className={styles.btnCreate}
        onClick={openModal}
        disabled={services.length === 0}
      >
        Criar pedido
      </button>
    </section>
  );
}
