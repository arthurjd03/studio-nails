import Image from "next/image";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <section id="sobre" className={styles.container}>
      <div className={styles.imageWrapper}>
        <section className={styles.image}
        ></section>
        <div className={styles.heartBadge}>♥</div>
      </div>

      <div className={styles.content}>
        <small className={styles.label}>Sobre mim</small>

        <h2>
          Prazer, eu sou a sua <span>nail designer!</span>
        </h2>

        <div className={styles.divider} />

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
    </section>
  );
}
