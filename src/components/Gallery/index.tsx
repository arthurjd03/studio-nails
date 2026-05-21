"use client";

import { useState } from "react";
import { nailGallery, feetGallery } from "@/constants";
import GalleryModal from "./GalleryModal";
import styles from "./styles.module.css";
import { Hand, Footprints, ArrowRight } from "lucide-react";

type GalleryType = "nails" | "feet" | null;

type GalleryCard = {
  type: Exclude<GalleryType, null>;
  title: string;
  icon: React.ReactNode;
  imageStyle: string;
};

const galleryCards: GalleryCard[] = [
  {
    type: "nails",
    title: "Mãos",
    icon: <Hand size={48} color="white" />,
    imageStyle: "cardImageNails",
  },
  {
    type: "feet",
    title: "Pés",
    icon: <Footprints size={48} color="white" />,
    imageStyle: "cardImageFeet",
  },
];

const galleries = {
  nails: { title: "Manicure — Mãos", images: nailGallery },
  feet: { title: "Pedicure — Pés", images: feetGallery },
};

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(null);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <small className={styles.label}>Portfólio</small>
      <h2 className={styles.galleryTitle}>Veja meu trabalho</h2>

      <div className={styles.cards}>
        {galleryCards.map((card) => (
          <div
            key={card.type}
            className={styles.card}
            onClick={() => setActiveGallery(card.type)}
          >
            <div className={`${styles.cardImage} ${styles[card.imageStyle]}`}>
              {card.icon}
            </div>
            <div className={styles.cardContent}>
              <div>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSub}>Ver galeria</p>
              </div>
              <div className={styles.cardArrow}>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
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
