import { Service, GalleryImage } from "@/types/service";

export const nailServices: Service[] = [
  {
    id: 1,
    name: "Manicure",
    price: 35,
    category: "nails",
    description: "Cutilagem, lixamento e esmaltação com acabamento impecável.",
    duration: "50 min",
  },
  {
    id: 2,
    name: "Pedicure",
    price: 35,
    category: "nails",
    description: "Cuidado relaxante, esfoliação e esmaltação para os pés.",
    duration: "1h",
  },
  {
    id: 3,
    name: "Pé + Plásticas",
    price: 120,
    category: "nails",
    description: "Hidratação profunda, massagem e esfoliação com aromaterapia.",
    duration: "1h20",
  },
  {
    id: 4,
    name: "Pé e mão",
    price: 70,
    category: "nails",
    description: "O cuidado completo em uma única sessão, com desconto.",
    duration: "1h40",
  },
  {
    id: 5,
    name: "Cuticulagem",
    price: 35,
    category: "nails",
    description:
      "Cuidado especializado e delicado com as unhas, incluindo remoção ou tratamento das cutículas, higienização, corte, lixamento e finalização com base fortalecedora.",
    duration: "45 min",
  },
  {
    id: 6,
    name: "Esmaltação",
    price: 35,
    category: "nails",
    description: "Cor intensa que dura até 3 semanas sem lascar.",
    duration: "1h10",
  },
  {
    id: 7,
    name: "Plástica dos pés",
    price: 85,
    category: "nails",
    description:
      "Tratamento de renovação e hidratação profunda para os pés. Remove asperezas, calosidades e células mortas sem lâminas, deixando a pele macia, renovada e aveludada.",
    duration: "50 min",
  },
];

export const braidServices: Service[] = [];

export const handsGallery: GalleryImage[] = [
  { src: "/images/gallery/nails/nails-1.webp", alt: "Trabalho 1" },
  { src: "/images/gallery/nails/nails-2.webp", alt: "Trabalho 2" },
  { src: "/images/gallery/nails/nails-3.webp", alt: "Trabalho 3" },
  { src: "/images/gallery/nails/nails-4.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-5.webp", alt: "Trabalho 5" },
  { src: "/images/gallery/nails/nails-6.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-7.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-8.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-9.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-10.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-11.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-12.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-13.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-14.webp", alt: "Trabalho 4" },
  { src: "/images/gallery/nails/nails-15.webp", alt: "Trabalho 4" },
];

export const feetGallery: GalleryImage[] = [
  { src: "/images/gallery/feets/feet-1.webp", alt: "Trabalho 1" },
];
export const INSTAGRAM_URL = "https://instagram.com/suellenj.damasceno";

export const LOCATION = "Rua Benjamim carneiro, 110 - Centro";
export const MAPS_URL = "https://maps.app.goo.gl/tjrQ6mExNmRWQF3h8";

export const paymentMethods = [
  "PIX",
  "Cartão de débito",
  "Cartão de crédito",
  "Dinheiro",
];

export const businessHours = [
  { day: "Terça a Sábado", hours: "8h — 18h" },
  { day: "Segunda", hours: "Fechado" },
  { day: "Domingo", hours: "Fechado" },
];
