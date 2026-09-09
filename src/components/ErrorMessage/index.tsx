"use client";

import styles from "./styles.module.css";
import { AlertCircle } from "lucide-react";

type ErrorMessageProps =  {
  reset: () => void;
}

export default function ErrorMessage({reset}: ErrorMessageProps
) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <AlertCircle size={48} className={styles.icon} />
        <h2 className={styles.title}>Ops! Algo deu errado.</h2>
        <p className={styles.description}>
          Não se preocupe isso pode acontecer. Tente novamente.
        </p>
        <button className={styles.btn} onClick={reset}> Tente novamente</button>
      </div>
    </div>
  );
}
