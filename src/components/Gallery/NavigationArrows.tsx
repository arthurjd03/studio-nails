"use client"

import styles from "./styles.module.css"

import { ArrowRight, ArrowLeft } from "lucide-react";

type NavigationArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function NavigationArrows({
  onNext,
  onPrev,
}: NavigationArrowsProps) {
  return (
    <div className={styles.arrows}>
      <button
        className={styles.arrowBtn}
        aria-label="Anterior"
        onClick={onPrev}
      >
        <ArrowLeft size={18} />
      </button>

      <button 
      className={styles.arrowBtn} 
      aria-label="Próximo" 
      onClick={onNext}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
