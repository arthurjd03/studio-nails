import Image from "next/image";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/images/profissional.jpeg"
            alt="Profissional de manicure"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className={styles.text}>
          <h2>Sobre mim</h2>

          <p>
            Servicos de manicure e pedicure com atenção aos detalhes, produtos
            de Agendar horário qualidade e um atendimento que faz vocè se sentir
            única.
          </p>

          <p>
            Prazer, eu sou a sua nail designer!

            Profissional especializada em cuidados com unhas, oferecendo
            serviços de manicure e pedicure com SOBRE MIM atenção aos detalhes e
            produtos de qualidade. Prazer, eu sou a Atendimento personalizado
            para garantir beleza e autoestima para cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
