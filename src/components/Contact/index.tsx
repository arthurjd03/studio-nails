"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Camera, MapPin, Clock } from "lucide-react";
import styles from "./styles.module.css";

type Hour = {
  day: string;
  time: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href: string | null;
};

const hours: Hour[] = [
  { day: "Terça", time: "8h — 18h" },
  { day: "Quarta", time: "8h — 18h" },
  { day: "Quinta", time: "8h — 18h" },
  { day: "Sexta", time: "8h — 18h" },
  { day: "Sábado", time: "8h — 18h" },
  { day: "Segunda", time: "Fechado" },
  { day: "Domingo", time: "Fechado" },
];

const contacts: Contact[] = [
  {
    icon: <MessageCircle size={26} />,
    title: "WhatsApp",
    sub: "Agendar horário",
    href: "https://wa.me/5538999999999",
  },
  {
    icon: <Camera size={26} />,
    title: "Instagram",
    sub: "@suellenj.damasceno",
    href: "https://instagram.com/suellenj.damasceno",
  },
  {
    icon: <MapPin size={26} />,
    title: "Local de atendimento",
    sub: "A domicílio — Paracatu, MG",
    href: null,
  },
];

export default function ContactMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={styles.container}>
      <small className={styles.label}>Contato</small>
      <h2 className={styles.title}>Onde me encontrar</h2>

      <div className={styles.cards}>
        {contacts.map((contact) =>
          contact.href ? (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.icon}>{contact.icon}</div>
              <span className={styles.cardTitle}>{contact.title}</span>
              <span className={styles.cardSub}>{contact.sub}</span>
            </a>
          ) : (
            <div key={contact.title} className={styles.card}>
              <div className={styles.icon}>{contact.icon}</div>
              <span className={styles.cardTitle}>{contact.title}</span>
              <span className={styles.cardSub}>{contact.sub}</span>
            </div>
          ),
        )}
      </div>

      <div className={styles.hours}>
        <h3 className={styles.hoursTitle}>
          <Clock size={18} />
          Horário de atendimento
        </h3>
        <div className={styles.hoursList}>
          {hours.map((h) => (
            <div key={h.day} className={styles.hourRow}>
              <span className={styles.hourDay}>{h.day}</span>
              <span
                className={`${styles.hourTime} ${h.time === "Fechado" ? styles.closed : ""}`}
              >
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
