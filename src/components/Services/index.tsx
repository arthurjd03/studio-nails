"use client";

import styles from "./styles.module.css";

import { nailServices } from "@/data/site";
import { useCart } from "@/context/CartContext";
import { Check, Clock, ShoppingBag } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import formatCurrency from "@/utils/format";

export default function Services() {
  const sectionRef = useScrollReveal<HTMLElement>();
  
  const { addService, removeService, hasService, openModal, services: isSelected } =
    useCart();

  return (
    <section id="servicos" ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Serviços</span>
        <h2 className={styles.title}>Monte o seu atendimento</h2>
        <p className={styles.subtitle}>
          Selecione os serviços desejados e envie seu pedido em segundos pelo
          WhatsApp.
        </p>
      </div>

      <div className={styles.list}>
        {nailServices.map((service, index) => {
          const isSelected = hasService(service.id);
          return (
            <button
              key={service.id}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              className={`${styles.card} ${isSelected ? styles.selected : ""}`}
              style={{ transitionDelay: `${index * 70}ms` }}
              onClick={() =>
                isSelected ? removeService(service.id) : addService(service)
              }
            >
              <span className={styles.cardTop}>
                <h3 className={styles.name}>{service.name}</h3>
                <span className={styles.checkbox} aria-hidden="true">
                  <Check size={16} />
                </span>
              </span>
              <p className={styles.description}>{service.description}</p>
              <span className={styles.meta}>
                <span className={styles.price}>
                  {formatCurrency(service.price)}
                </span>
                <span className={styles.duration}>
                  <Clock size={14} aria-hidden="true" />
                  {service.duration}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.orderBtn}
          disabled={isSelected.length === 0}
          onClick={openModal}
        >
          <ShoppingBag size={18} aria-hidden="true" />
          Criar pedido
          {isSelected.length > 0 ? ` (${isSelected.length})` : ""}
        </button>
        <span className={styles.hint}>
          {isSelected.length === 0
            ? "Selecione ao menos um serviço para continuar"
            : "Você revisa tudo antes de enviar"}
        </span>
      </div>
    </section>
  );
}
