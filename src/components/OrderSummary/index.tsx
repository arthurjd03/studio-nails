"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Send, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { paymentMethods } from "@/data/site";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/utils/whatsapp";
import formatCurrency from "@/utils/format";

import styles from "./styles.module.css";

export function OrderSummary() {
  const { isOpen, closeModal, services, removeService, total, clearCart } =
    useCart();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState(paymentMethods[0]!);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(services, {
      name,
      phone,
      payment,
      notes,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    clearCart();
    setName("");
    setPhone("");
    setNotes("");
    setPayment(paymentMethods[0]!);
    closeModal();
  };

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Resumo do pedido"
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <div>
            <span className={styles.step}>Passo {step} de 2</span>
            <h3 className={styles.title}>
              {step === 1 ? "Seu pedido" : "Seus dados"}
            </h3>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={closeModal}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        {step === 1 ? (
          <>
            {services.length === 0 ? (
              <p className={styles.empty}>Nenhum serviço selecionado ainda.</p>
            ) : (
              <ul className={styles.items}>
                {services.map((service) => (
                  <li key={service.id} className={styles.item}>
                    <span className={styles.itemName}>{service.name}</span>
                    <span className={styles.itemRight}>
                      <span className={styles.itemPrice}>
                        {formatCurrency(service.price)}
                      </span>
                      <button
                        type="button"
                        className={styles.remove}
                        onClick={() => removeService(service.id)}
                        aria-label={`Remover ${service.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.total}>
              <span>Total</span>
              <span className={styles.totalValue}>{formatCurrency(total)}</span>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondary}
                onClick={closeModal}
              >
                Continuar escolhendo
              </button>
              <button
                type="button"
                className={styles.primary}
                onClick={() => setStep(2)}
                disabled={services.length === 0}
              >
                Continuar
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Nome</span>
              <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Telefone</span>
              <input
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 99999-9999"
                inputMode="tel"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Forma de pagamento</span>
              <select
                className={styles.select}
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Observações (opcional)</span>
              <textarea
                className={styles.textarea}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Preferência de dia, horário, inspiração de cor…"
              />
            </label>

            <div className={styles.total}>
              <span>Total</span>
              <span className={styles.totalValue}>{formatCurrency(total)}</span>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondary}
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={18} aria-hidden="true" />
                Voltar
              </button>
              <button type="submit" className={styles.primary}>
                <Send size={18} aria-hidden="true" />
                Enviar no WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
