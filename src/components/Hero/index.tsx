import Image from "next/image";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          Cuidado que <span>realça sua beleza</span>
        </h1>

        <p>
          Serviços de manicure e pedicure com atenção aos detalhes, produtos de
          qualidade e um atendimento que faz você se sentir única.
        </p>

        <div className={styles.actions}>
          <a href="#contato" className={styles.ctaPrimary}>
            Agendar horário
          </a>

          <a href="#servicos" className={styles.ctaSecondary}>
            Ver serviços
          </a>
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="/images/profissional.jpeg"
          alt="Profissional de manicure"
          width={300}
          height={410}
          priority
        />
      </div>
    </section>
  );
}
