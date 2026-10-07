"use client";

import { Sparkles, CalendarHeart, Images, SmilePlus, Compass } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroPhoto from "@/assets/suellen.webp";
import styles from "./styles.module.css";

export function Hero() {
  const ref = useScrollReveal<HTMLElement>({ once: true, threshold: 0.05 });

  return (
    <section id="init" ref={ref} className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Compass size={14} aria-hidden="true" />
          Nail designer em Paracatu-MG
        </span>
        <h1 className={styles.title}>
          Cuidado que <em>realça</em> sua beleza
        </h1>
        <p className={styles.text}>
          Serviços de manicure e pedicure com atenção aos detalhes, produtos de
          qualidade e um atendimento que faz você se sentir única.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryBtn} href="#services">
            <CalendarHeart size={18} aria-hidden="true" />
            Agendar horário
          </a>
          <a className={styles.ghostBtn} href="#gallery">
            <Images size={18} aria-hidden="true" />
            Ver trabalhos
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <span className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <span className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <span className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src={heroPhoto.src}
            alt="Suellen, nail designer, sorrindo em seu estúdio"
            width={1024}
            height={1280}
          />
        </div>

        <div className={styles.badge}>
          <SmilePlus size={16} aria-hidden="true" />
          Fazendo clientes felizes
        </div>
      </div>
    </section>
  );
}
