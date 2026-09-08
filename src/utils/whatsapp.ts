import type { Service } from "@/types/service";
import formatCurrency from "./format";

export const WHATSAPP_NUMBER = "553898143836";


export interface OrderDetails {
  name: string;
  phone: string;
  payment: string;
  notes?: string;
}

export function buildWhatsAppMessage(
  services: Service[],
  details: OrderDetails,
): string {
  const total = services.reduce((sum, s) => sum + s.price, 0);
  const lines: string[] = [];

  lines.push("*Novo pedido - Suellen Nails*");
  lines.push("");
  lines.push(`*Nome:* ${details.name}`);
  lines.push(`*Telefone:* ${details.phone}`);
  lines.push("");
  lines.push("*Serviços escolhidos:*");
  services.forEach((s) => {
    lines.push(`• ${s.name} — ${formatCurrency(s.price)}`);
  });
  lines.push("");
  lines.push(`*Total:* ${formatCurrency(total)}`);
  lines.push(`*Forma de pagamento:* ${details.payment}`);

  if (details.notes && details.notes.trim().length > 0) {
    lines.push("");
    lines.push(`*Observações:* ${details.notes.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  message: string,
  phone: string = WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
