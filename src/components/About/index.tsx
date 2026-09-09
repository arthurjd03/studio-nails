"use client";

import { Heart, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImage from "@/assets/about.jpg";
import styles from "./styles.module.css";

const highlights = [
  "Materiais esterilizados a cada atendimento",
  "Atendimento individual e com hora marcada",
  "Produtos hipoalergênicos e de alta durabilidade",
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="aboutme" ref={ref} className={styles.about}>
      <div className={styles.text}>
        <span className={styles.eyebrow}>Sobre mim</span>
        <h2 className={styles.title}>Cada unha é um detalhe da sua história</h2>
        <p className={styles.paragraph}>
          Profissional especializada em cuidados com unhas, oferecendo serviços
          de manicure e pedicure com atenção aos detalhes e produtos de
          qualidade.
        </p>
        <p className={styles.paragraph}>
          Atendimento personalizado para garantir conforto, beleza e autoestima
          para cada cliente.
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
          <img
            className={styles.image}
            src={aboutImage.src}
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
            <span className={styles.statLabel}>unhas feitas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
