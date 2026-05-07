import styles from "./styles.module.css"

export default function ServiceCards() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Serviços e Valores</h2>
      <ul>
        <li>
          Gel moldado – R$ 90
          <a
            href="https://wa.me/5538998836488?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
          >
            Agendar
          </a>
        </li>
        <li>
          Manutenção – R$ 60{" "}
          <a href="#" target="_blank">
            Agendar
          </a>
        </li>
        <li>
          Francesinha em gel – R$ 100{" "}
          <a href="#" target="_blank">
            Agendar
          </a>
        </li>
        <li>
          Unha encapsulada – R$ 110{" "}
          <a href="#" target="_blank">
            Agendar
          </a>
        </li>
      </ul>
    </section>
  );
}