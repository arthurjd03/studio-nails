"use client";

import { Camera, Clock, MapPin, MessageCircle } from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { businessHours, INSTAGRAM_URL, LOCATION, MAPS_URL } from "@/data/site";
import { WHATSAPP_URL } from "@/utils/whatsapp";
import styles from "./styles.module.css";

type ContactItem = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  const contacts: ContactItem[] = [
    {
      icon: <MessageCircle size={22} aria-hidden="true" />,
      title: "WhatsApp",
      value: "38 99883-6488",
      href: WHATSAPP_URL,
    },
    {
      icon: <MapPin size={22} aria-hidden="true" />,
      title: "Localização",
      value: LOCATION,
      href: MAPS_URL,
    },
  ];

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Contato</span>

        <h2 className={styles.title}>Pronta para se cuidar? Fale comigo</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.cards}>
          {contacts.map((contact) => {
            const content = (
              <>
                <span className={styles.icon}>{contact.icon}</span>

                <span className={styles.cardText}>
                  <span className={styles.cardTitle}>{contact.title}</span>

                  <span className={styles.cardValue}>{contact.value}</span>
                </span>
              </>
            );

            return contact.href ? (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                {content}
              </a>
            ) : (
              <div key={contact.title} className={styles.card}>
                {content}
              </div>
            );
          })}
        </div>

        <div className={styles.hours}>
          <h3 className={styles.hoursTitle}>
            <Clock size={18} aria-hidden="true" />
            Horários de atendimento
          </h3>

          <div className={styles.hoursList}>
            {businessHours.map((row) => (
              <div key={row.day} className={styles.hoursRow}>
                <span>{row.day}</span>

                <span
                  className={`${styles.hoursValue} ${
                    row.hours === "Fechado" ? styles.closed : ""
                  }`}
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
