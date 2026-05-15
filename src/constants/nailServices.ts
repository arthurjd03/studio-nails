import { Service } from "@/types/service";

export const nailServices: Service[] = [
  { id: 1, name: "Manicure", price: 40 },
  { id: 2, name: "Pedicure", price: 40 },
  { id: 3, name: "Pé e mão", price: 65 },
  { id: 4, name: "Cuticulagem", price: 40 },
  { id: 5, name: "Esmaltação", price: 40 },
];

type GalleryImage = {
  src: string;
  alt: string
}

export const nailGallery: GalleryImage[] = [
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
  { src: "/images/gallery/nails/nail-1", alt: "" },
]
