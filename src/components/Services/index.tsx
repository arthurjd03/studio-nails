"use client";

import styles from "./styles.module.css";
import ServiceCard from "./ServiceCard";
import { nailServices } from "@/constants";
import { useCart } from "@/context/CartContext";

export default function Services() {
  const { addService, removeService, hasService, openModal, services } = useCart();

  return (
    <section id="services" className={styles.services}>
      <small className={styles.label}>Serviços e Valores</small>
      <h2 className={styles.title}>Escolha o seu cuidado</h2>
      <ul className={styles.list}>
        {nailServices.map((service) => (
          <li key={service.id}>
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
        Criar serviços
      </button>
    </section>
  );
}