import Image from "next/image";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <div className={`${styles.circle} ${styles.c1}`} />
        <div className={`${styles.circle} ${styles.c2}`} />
        <div className={`${styles.circle} ${styles.c3}`} />
        <div className={`${styles.circle} ${styles.c4}`} />
        <div className={`${styles.circle} ${styles.c5}`} />
        <div className={`${styles.circle} ${styles.c6}`} />
        <Image
          src="/images/professional/suellen.webp"
          alt="Profissional de manicure"
          width={300}
          height={410}
          quality={90}
          priority
        />
      </div>
      <div className={styles.content}>
        <h1>
          <small>Cuidado que</small> <span>realça sua</span>
          <em> beleza</em>
        </h1>

        <p>
          Serviços de manicure e pedicure com atenção aos detalhes, produtos de
          qualidade e um atendimento que faz você se sentir única.
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
  );
}
