"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/utils/whatsappMessage";
import { X } from "lucide-react";

export default function OrderSummary() {
  const { services, clearCart, isOpen, closeModal } = useCart();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const [notes, setNotes] = useState("");

  const total = services.reduce((acc, service) => acc + service.price, 0);

  const handleClose = () => {
    closeModal();
    setStep(1);
  };

  const handleSendWhatsApp = () => {
  const message = buildWhatsAppMessage({
    name,
    phone,
    payment,
    notes,
    services,
    total,
  });
  window.open(buildWhatsAppUrl("553898143836", message));
    clearCart();
    handleClose();
    setName("");
    setPhone("");
    setPayment("");
    setNotes("");
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>
            {step === 1 ? "Seu pedido" : "Seus dados"}
          </span>
          <button className={styles.closeBtn} onClick={handleClose}>
            <X size={18} />
          </button>
        </div>

        {step === 1 && (
          <div>
            <ul className={styles.serviceList}>
              {services.map((service) => (
                <li key={service.id} className={styles.serviceItem}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>
                    R$ {service.price},00
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>R$ {total},00</span>
            </div>
            <button className={styles.btnPrimary} onClick={() => setStep(2)}>
              Continuar
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.form}>
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
            <input
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Seu telefone"
            />
            <select
              className={styles.select}
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="">Selecione o pagamento</option>
              <option value="PIX">PIX</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
            <textarea
              className={styles.textarea}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Observações (opcional)"
            />
            <button className={styles.btnPrimary} onClick={handleSendWhatsApp}>
              Enviar no WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
