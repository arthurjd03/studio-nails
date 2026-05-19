"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import GalleryCarousel from "./GalleryCarousel";
import styles from "./styles.module.css";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryModalProps = {
  title: string;
  images: GalleryImage[];
  onClose: () => void;
};

export default function GalleryModal({
  title,
  images,
  onClose,
}: GalleryModalProps) {
  // close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // lock body scroll while modal is open
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
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <GalleryCarousel images={images} />
      </div>
    </div>
  );
}
