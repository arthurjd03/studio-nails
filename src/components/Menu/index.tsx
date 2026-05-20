"use client";
import styles from "./styles.module.css";
import { MessageCircle } from "lucide-react";

export default function Menu() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <em>Suellen</em> <span>Nails</span>
        </div>

        <nav className={styles.nav}>
          <a href="#init">Início</a>
          <a href="#aboutme">Sobre mim</a>
          <a href="#gallery">Galeria</a>
          <a href="#contact">Contato</a>
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
