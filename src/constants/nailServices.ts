import { Service } from "@/types/service";

export const nailServices: Service[] = [
  {
    id: 1,
    name: "Manicure",
    price: 40,
    category: "nails",
    description: "Cutilagem, lixamento e esmaltação com acabamento impecável.",
    duration: "50 min",
  },
  {
    id: 2,
    name: "Pedicure",
    price: 40,
    category: "nails",
    description: "Escalda-pés relaxante, esfoliação e esmaltação duradoura.",
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
    price: 65,
    category: "nails",
    description: "O cuidado completo em uma única sessão, com desconto.",
    duration: "1h40",
  },
  { id: 5, name: "Cuticulagem", price: 40, category: "nails" },
  {
    id: 6,
    name: "Esmaltação",
    price: 40,
    category: "nails",
    description: "Cor intensa que dura até 3 semanas sem lascar.",
    duration: "1h10",
  },
  { id: 7, name: "Plástica dos pés", price: 80, category: "nails" },
];
