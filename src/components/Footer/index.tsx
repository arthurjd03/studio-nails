import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.logo}>Suellen</span>
        <span className={styles.subtitle}>Nails</span>
      </div>

      <p className={styles.tagline}>
        Cuidado, técnica e carinho em cada detalhe das suas unhas.
      </p>

      <p className={styles.copy}>© {new Date().getFullYear()} Suellen Nails</p>
    </footer>
  );
}
