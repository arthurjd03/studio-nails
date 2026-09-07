export type Service = {
  id: number;
  name: string;
  price: number;
  description?: string;
  duration?: string
  category: "nails" | "braids";
  icon?: string;
};
