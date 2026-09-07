"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, Calendar, Star, Users, Check } from "lucide-react";
import styles from "./styles.module.css";

export default function AboutMe() {
  const containerRef = useRef<HTMLElement>(null);

  const highlights = [
    "Materiais esterilizados a cada atendimento",
    "Atendimento individual e com hora marcada",
    "Produtos hipoalergênicos e de alta durabilidade",
  ];
  
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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <section id="aboutme" className={styles.container}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Sobre mim</span>

          <h2 className={styles.title}>
            Cada unha é um detalhe da sua história
          </h2>
          <p className={styles.paragraph}>
            Profissional especializada em cuidados com unhas, oferecendo
            serviços de manicure e pedicure com atenção aos detalhes e produtos
            de qualidade.
          </p>
          <p className={styles.paragraph}>
            Atendimento personalizado para garantir conforto, beleza e
            autoestima para cada cliente.
          </p>
          <ul className={styles.list}>
            {highlights.map((item) => (
              <li key={item} className={styles.listItem}>
                <Check size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <Image
              className={styles.image}
              src="/about/about.jpg"
              alt="Suellen aplicando esmalte nas unhas de uma cliente"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <span className={styles.heart} aria-hidden="true">
              <Heart size={22} fill="currentColor" />
            </span>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>anos de experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>400+</span>
              <span className={styles.statLabel}>clientes atendidas</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
