"use client";

import { useEffect, useRef } from "react";
import { Layers, CreditCard, DollarSign } from "lucide-react";
import styles from "./styles.module.css";

const payments = [
  { label: "PIX", icon: <Layers size={18} />, style: styles.pix },
  {
    label: "Cartão de débito",
    icon: <CreditCard size={18} />,
    style: styles.debit,
  },
  {
    label: "Cartão de crédito",
    icon: <CreditCard size={18} />,
    style: styles.credit,
  },
  { label: "Dinheiro", icon: <DollarSign size={18} />, style: styles.cash },
];

export default function PaymentMethods() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <small className={styles.label}>Pagamento</small>
      <h2 className={styles.title}>Formas de pagamento</h2>
      <p className={styles.subtitle}>
        Escolha a forma que preferir no momento da escolha dos serviços.
      </p>
      <div className={styles.pills}>
        {payments.map((payment, index) => (
          <div
            key={payment.label}
            className={`${styles.pill} ${payment.style}`}
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            {payment.icon}
            {payment.label}
          </div>
        ))}
      </div>
    </section>
  );
}
