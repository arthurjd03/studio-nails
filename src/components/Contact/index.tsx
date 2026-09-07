"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Camera, MapPin, Clock } from "lucide-react";
import styles from "./styles.module.css";
import { INSTAGRAM_URL } from "@/data/site";

type Hour = {
  day: string;
  hours: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href: string | null;
};

const hours: Hour[] = [
  { day: "Terça a Sábado", hours: "8h — 18h" },
  { day: "Segunda", hours: "Fechado" },
  { day: "Domingo", hours: "Fechado" },
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
    href: INSTAGRAM_URL,
  },
  {
    icon: <MapPin size={26} />,
    title: "Local de atendimento",
    sub: "Paracatu, MG",
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
                className={`${styles.hourTime} ${h.hours === "Fechado" ? styles.closed : ""}`}
              >
                {h.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
