import type { Service } from "@/types/service";
import formatCurrency from "./format";

const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
export const WHATSAPP_NUMBER  = rawNumber?.replace(/\D/g, "");
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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

  lines.push(" *NOVO PEDIDO - SUELLEN NAILS* ");
  lines.push("-----------------------------------");
  lines.push(` *Cliente:* ${details.name}`);
  lines.push(` *Contato:* ${details.phone}`);
  lines.push("");
  lines.push(" *Serviços Agendados:*");

  services.forEach((s) => {
    lines.push(`${s.name} — *${formatCurrency(s.price)}*`);
  });

  lines.push("-----------------------------------");
  lines.push(` *Total:* *${formatCurrency(total)}*`);
  lines.push(` *Pagamento:* ${details.payment}`);

  lines.push("");
  lines.push(" *Gostaria de saber:*");
  lines.push(" Quais datas e horários estão disponíveis?");

  if (details.notes && details.notes.trim().length > 0) {
    lines.push("");
    lines.push(` *Observações:*`);
    lines.push(`   _${details.notes.trim()}_`);
  }

  lines.push("");
  lines.push(" _Pedido gerado via site oficial_");
  
  lines.push("");
  lines.push("Declaro que li e concordo com a Política de privacidade do estúdio.")

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  message: string,
  phone: string = WHATSAPP_URL,
): string {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
