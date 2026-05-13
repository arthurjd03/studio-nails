// Fotos reais dos trabalhos.
import styles from "./styles.module.css";

export default function Gallery() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Veja meu trabalho</h2>
      <div className="galeria">
        <div className="slide">
          <img src="assets/" alt="Unha 1" />
        </div>

        <div className="slide">
          <img src="assets/" alt="Unha 1" />
        </div>
      </div>
    </section>
  );
}