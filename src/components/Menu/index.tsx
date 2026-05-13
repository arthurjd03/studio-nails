"use client";
import styles from "./styles.module.css";
import { MessageCircle } from "lucide-react";

export default function Menu() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          Suellen <span>Nails</span>
        </h1>

        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <MessageCircle size={18} />
          <span>Agendar horário</span>
        </a>
      </div>
    </header>
  );
}
