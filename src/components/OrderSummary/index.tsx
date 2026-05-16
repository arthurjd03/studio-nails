"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./styles.module.css";
import { X } from "lucide-react";

export default function OrderSummary() {
  const { services, zerar, isOpen, fecharModal } = useCart();


  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [payment, setPayment] = useState("");
  const [observation, setObservation] = useState("");

  const total = services.reduce((acumulador, service) => {
    return acumulador + service.price;
  }, 0);

  const enviarWhatsApp = () => {
    const mensagem = `Olá! Gostaria de agendar um horário 😊

 *Nome:* ${name}
 *Telefone:* ${telephone}
 *Pagamento:* ${payment}

 *Serviços escolhidos:*
${services.map((s) => `• ${s.name} — R$ ${s.price},00`).join("\n")}

 *Total: R$ ${total},00*

${observation ? `📝 *Observação:* ${observation}` : ""}

Quais horários estão disponíveis?`;
    window.open(
      `https://wa.me/+553898143836?text=${encodeURIComponent(mensagem)}`,
    );
    zerar();
    fecharModal();
    setStep(1);
    setName("");
    setTelephone("");
    setPayment("");
    setObservation("");
  };

  return (
    <section>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>
                {step === 1 ? "Seu pedido" : "Seus dados"}
              </span>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  fecharModal();
                  setStep(1);
                }}
              >
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
                        R$ {service.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={styles.total}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalValue}>R$ {total},00</span>
                </div>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setStep(2)}
                >
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
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
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
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  placeholder="Observações (opcional)"
                />
                <button className={styles.btnPrimary} onClick={enviarWhatsApp}>
                  Enviar no WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
