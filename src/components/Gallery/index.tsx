"use client";

import { useState } from "react";
import { Hand, Footprints, Maximize2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { feetGallery, handsGallery } from "@/data/site";
import GalleryModal from "./GalleryModal";

import styles from "./styles.module.css";

type Album = "hands" | "feet" | null;

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();
  const [album, setAlbum] = useState<Album>(null);

  return (
    <section id="gallery" ref={ref} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Galeria</span>
        <h2 className={styles.title}>Trabalhos que falam por si</h2>
        <p className={styles.subtitle}>
          Escolha um álbum para ver de perto os acabamentos, formatos e cores
          que mais fazem sucesso.
        </p>
      </div>

      <div className={styles.cards}>
        <button
          type="button"
          className={styles.card}
          onClick={() => setAlbum("hands")}
        >
          <img
            className={styles.cardImage}
            src={handsGallery[0]!.src}
            alt={handsGallery[0]!.alt}
            loading="lazy"
          />
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.overlay}>
            <span className={styles.cardTitle}>
              <Hand size={18} aria-hidden="true" /> Mãos
            </span>
            <span className={styles.cardHint}>
              <Maximize2 size={14} aria-hidden="true" /> Ver álbum
            </span>
          </span>
        </button>

        <button
          type="button"
          className={styles.card}
          onClick={() => setAlbum("feet")}
        >
          <img
            className={styles.cardImage}
            src={feetGallery[0]!.src}
            alt={feetGallery[0]!.alt}
            loading="lazy"
          />
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.overlay}>
            <span className={styles.cardTitle}>
              <Footprints size={18} aria-hidden="true" /> Pés
            </span>
            <span className={styles.cardHint}>
              <Maximize2 size={14} aria-hidden="true" /> Ver álbum
            </span>
          </span>
        </button>
      </div>

      {album && (
        <GalleryModal
          title={album === "hands" ? "Mãos" : "Pés"}
          images={album === "hands" ? handsGallery : feetGallery}
          onClose={() => setAlbum(null)}
        />
      )}
    </section>
  );
}
