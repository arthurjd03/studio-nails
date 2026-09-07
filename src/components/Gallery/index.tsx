"use client";

import { useEffect, useRef, useState } from "react";
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
  nails: { title: " Mãos", images: nailGallery },
  feet: { title: " Pés", images: feetGallery },
};

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className={styles.gallerySection}>
      <section id="gallery" className={styles.gallerySection}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Galeria</span>
          <h2 className={styles.title}>Trabalhos que falam por si</h2>
          <p className={styles.subtitle}>
            Escolha um álbum para ver de perto os acabamentos, formatos e cores
            que mais fazem sucesso no estúdio.
          </p>
        </div>

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
                  <p className={styles.cardSub}>Ver álbum</p>
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
    </section>
  );
}
