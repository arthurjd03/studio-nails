"use client";

import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import NavigationArrows from "./NavigationArrows";
import useEmblaCarousel from "embla-carousel-react";

type GalleryCarouselProps = {
  images: { src: string; alt: string }[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const loopedImages = [...images, ...images, ...images];

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className={styles.emblawrapper}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {loopedImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.emblaSlide} ${
                index % images.length === selectedIndex % images.length
                  ? styles.emblaSlideActive
                  : styles.emblaSlideInactive
              }`}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <NavigationArrows onPrev={onPrev} onNext={onNext} />
    </div>
  );
}
