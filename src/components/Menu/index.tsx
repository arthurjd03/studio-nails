import { Camera } from "lucide-react";

import styles from "./styles.module.css";
import { INSTAGRAM_URL } from "@/data/site";

const links = [
  { href: "#aboutme", label: "Sobre" },
  { href: "#gallery", label: "Galeria" },
  { href: "#services", label: "Serviços" },
  { href: "#contact", label: "Contato" },
];

export function Menu() {
  return (
    <header className={styles.header}>
      <a href="#init" className={styles.brand}>
        <span className={styles.logo}>Suellen</span>
        <span className={styles.subtitle}>Nails</span>
      </a>

      <nav className={styles.nav} aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className={styles.cta} href={INSTAGRAM_URL} target="_blank">
        <Camera size={16} aria-hidden="true" />
        Minha rede social
      </a>
    </header>
  );
}
