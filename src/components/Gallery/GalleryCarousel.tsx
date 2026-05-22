"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import NavigationArrows from "./NavigationArrows";
import useEmblaCarousel from "embla-carousel-react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryCarouselProps = {
  images: GalleryImage[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className={styles.emblaWrapper}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.emblaSlide} ${
                index % images.length === selectedIndex % images.length
                  ? styles.emblaSlideActive
                  : styles.emblaSlideInactive
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={533}
                quality={80}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>
      </div>
      <NavigationArrows onPrev={onPrev} onNext={onNext} />
    </div>
  );
}
