"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import GalleryCarousel from "./GalleryCarousel";
import styles from "./styles.module.css";

type GalleryModalProps = {
  title: string;
  images: { src: string; alt: string }[];
  onClose: () => void;
};

export default function GalleryModal({
  title,
  images,
  onClose,
}: GalleryModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // trava o scroll do body enquanto modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>{title}</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>
        <GalleryCarousel images={images} />
      </div>
    </div>
  );
}
