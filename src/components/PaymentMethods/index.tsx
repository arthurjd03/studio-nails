import { Layers, CreditCard, DollarSign } from "lucide-react";
import styles from "./styles.module.css";

const payments = [
  {
    label: "PIX",
    icon: <Layers size={18} />,
    style: styles.pix,
  },
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
  {
    label: "Dinheiro",
    icon: <DollarSign size={18} />,
    style: styles.cash,
  },
];

export default function PaymentMethods() {
  return (
    <section className={styles.container}>
      <small className={styles.label}>Pagamento</small>
      <h2 className={styles.title}>Formas de pagamento</h2>
      <p className={styles.subtitle}>
        Escolha a forma que preferir no momento da escolha dos serviços.
      </p>

      <div className={styles.pills}>
        {payments.map((payment) => (
          <div
            key={payment.label}
            className={`${styles.pill} ${payment.style}`}
          >
            {payment.icon}
            {payment.label}
          </div>
        ))}
      </div>
    </section>
  );
}
