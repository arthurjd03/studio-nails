import Image from "next/image";
import { Heart,Calendar, Star, Users } from "lucide-react";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <section id="aboutme" className={styles.container}>
      <div className={styles.content}>
        <small className={styles.label}>Sobre mim</small>

        <h2>
          Prazer, eu sou a sua <span>nail designer!</span>
        </h2>

        <div className={styles.dividerLine}>
          <span className={styles.line} />
          <Heart size={16} className={styles.heart} />
          <span className={styles.line} />
        </div>

        <p>
          Profissional especializada em cuidados com unhas, oferecendo serviços
          de manicure e pedicure com atenção aos detalhes e produtos de
          qualidade.
        </p>
        <p>
          Atendimento personalizado para garantir conforto, beleza e autoestima
          para cada cliente.
        </p>

        <a href="#contato" className={styles.cta}>
          Me conhecer melhor
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/logo/about.png"
          alt="Suellen fazendo unhas"
          width={200}
          height={400}
          className={styles.image}
        />

        <div className={styles.statsCard}>
          <div className={styles.stat}>
            <span className={styles.statValue}>
              <Calendar size={16} />
              3+
            </span>
            <span className={styles.statLabel}>anos de experiência</span>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.stat}>
            <span className={styles.statValue}>
              <Users size={16} />
              200+
            </span>
            <span className={styles.statLabel}>clientes atendidas</span>
          </div>

          <div className={styles.statDivider} />

          <div className={styles.stat}>
            <span className={styles.statValue}>
              <Star size={16} fill="currentColor" />
              5.0
            </span>
            <span className={styles.statLabel}>avaliação média</span>
          </div>
        </div>
      </div>
    </section>
  );
}
