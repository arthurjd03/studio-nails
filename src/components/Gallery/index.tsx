// Fotos reais dos trabalhos.
import styles from "./styles.module.css";

export default function Gallery() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Veja meu trabalho</h2>
      <div className={styles.galeria}>
        <div className={styles.slide}>
        </div>

        <div className={styles.slide}>
        </div>
      </div>
    </section>
  );
}