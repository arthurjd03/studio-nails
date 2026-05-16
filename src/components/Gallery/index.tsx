"use client";
import { useState } from "react";
import { nailGallery } from "@/constants";
import GalleryModal from "./GalleryModal";
import styles from "./styles.module.css";
import { Hand, Footprints, ArrowRight } from "lucide-react";

type GalleryType = "nails" | "feet" | null;

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(null);

  const galleries = {
    nails: { title: "Manicure — Mãos", images: nailGallery },
    feet: { title: "Pedicure — Pés", images: nailGallery }, // trocar por feetGallery quando tiver
  };

  return (
    <section id="galeria" className={styles.gallerySection}>
      <span className={styles.label}>Portfólio</span>
      <h2 className={styles.galleryTitle}>Veja meu trabalho</h2>

      <div className={styles.cards}>
        <div className={styles.card} onClick={() => setActiveGallery("nails")}>
          <div className={`${styles.cardImage} ${styles.cardImageNails}`}>
            <Hand size={48} color="white" />
          </div>
          <div className={styles.cardContent}>
            <div>
              <p className={styles.cardTitle}>Mãos</p>
              <p className={styles.cardSub}>Ver galeria</p>
            </div>
            <div className={styles.cardArrow}>
              <ArrowRight size={16} color="#e5396b" />
            </div>
          </div>
        </div>

        <div className={styles.card} onClick={() => setActiveGallery("feet")}>
          <div className={`${styles.cardImage} ${styles.cardImageFeet}`}>
            <Footprints size={48} color="white" />
          </div>
          <div className={styles.cardContent}>
            <div>
              <p className={styles.cardTitle}>Pés</p>
              <p className={styles.cardSub}>Ver galeria</p>
            </div>
            <div className={styles.cardArrow}>
              <ArrowRight size={16} color="#e5396b" />
            </div>
          </div>
        </div>
      </div>

      {activeGallery && (
        <GalleryModal
          title={galleries[activeGallery].title}
          images={galleries[activeGallery].images}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
