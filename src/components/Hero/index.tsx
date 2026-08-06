"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add("loaded");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.disconnect(); // anima só uma vez
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <section className={styles.container}>
        <div className={styles.image}>
          {/* rings */}
          <div className={styles.ring + " " + styles.r1} />
          <div className={styles.ring + " " + styles.r2} />
          <div className={styles.ring + " " + styles.r3} />
          <div className={styles.ring + " " + styles.r4} />

          {/* orbs */}
          <div className={`${styles.glowOrb} ${styles.o1}`} />
          <div className={`${styles.glowOrb} ${styles.o2}`} />
          <Image
            src="/images/professional/suellen.webp"
            alt="Profissional de manicure"
            width={300}
            height={410}
            quality={90}
            priority
          />
        </div>
        <div id="init" className={styles.content}>
          <h1>
            <small>Cuidado que</small> <span>realça sua</span>
            <em> beleza</em>
          </h1>

          <p>
            Serviços de manicure e pedicure com atenção aos detalhes, produtos
            de qualidade e um atendimento que faz você se sentir única.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.ctaPrimary}>
              Agendar horário
            </a>

            <a href="#services" className={styles.ctaSecondary}>
              Ver serviços
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
