"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types/service";
import styles from "./styles.module.css";

interface Props {
  title: string;
  images: GalleryImage[];
  onClose: () => void;
}

export default function GalleryModal({ title, images, onClose }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <h3 className={styles.titleModal}>{title}</h3>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Fechar galeria"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.carousel}>
          <button
            type="button"
            className={styles.arrow}
            onClick={prev}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.container}>
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`${styles.slide} ${index === selected ? styles.slideActive : ""}`}
                >
                  <img
                    className={styles.slideImage}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={next}
            aria-label="Próxima foto"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
