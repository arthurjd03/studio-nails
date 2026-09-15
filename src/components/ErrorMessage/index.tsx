"use client";

import styles from "./styles.module.css";
import { AlertCircle, WifiOff } from "lucide-react";

type ErrorMessageProps = {
  variant: "error" | "not-found" | "connection";
  reset: () => void;
  onReload?: () => void;
  showReset?: boolean;
  secondaryLabel?: string;
};

export default function ErrorMessage({
  variant,
  reset,
  onReload,
  showReset = true,
  secondaryLabel = "Recarregar página",
}: ErrorMessageProps) {
  const content = {
    error: {
      icon: <AlertCircle size={48} className={styles.icon} />,
      title: "Ops! Algo deu errado.",
      description: "Não se preocupe, isso pode acontecer. Tente novamente.",
    },
    "not-found": {
      icon: <AlertCircle size={48} className={styles.icon} />,
      title: "Página não encontrada",
      description:
        "Parece que essa página saiu para fazer as unhas! Volte para a página inicial.",
    },
    connection: {
      icon: <WifiOff size={48} className={styles.icon} />,
      title: "Sem conexão",
      description: "Verifique sua conexão com a internet e tente novamente.",
    },
  }[variant];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {content.icon}
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.description}>{content.description}</p>

        {showReset && (
          <button className={styles.btn} onClick={reset}>
            Tentar novamente
          </button>
        )}
        <button
          className={styles.btnSecondary}
          onClick={onReload ?? (() => window.location.reload())}
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
}
