"use client";

import { Banknote, CreditCard, QrCode, WalletCards } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./styles.module.css";

const methods = [
  { label: "PIX", icon: QrCode, className: "pix" },
  { label: "Cartão de débito", icon: WalletCards, className: "debit" },
  { label: "Cartão de crédito", icon: CreditCard, className: "credit" },
  { label: "Dinheiro", icon: Banknote, className: "cash" },
] as const;

export default function PaymentMethods() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Formas de pagamento</h2>
        <p className={styles.subtitle}>
          Escolha como preferir pagar no dia do atendimento.
        </p>
        <div className={styles.pills}>
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <span
                key={method.label}
                className={`${styles.pill} ${styles[method.className]}`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <Icon size={16} aria-hidden="true" />
                {method.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
