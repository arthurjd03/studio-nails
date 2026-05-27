import { Service } from "@/types/service";

type OrderMessageParams = {
  name: string;
  phone: string;
  payment: string;
  notes: string;
  services: Service[];
  total: number;
};

export function buildWhatsAppMessage({
  name,
  phone,
  payment,
  notes,
  services,
  total,
}: OrderMessageParams): string {
  return `Olá! Gostaria de agendar um horário 😊

*Nome:* ${name}
*Telefone:* ${phone}
*Pagamento:* ${payment}

*Serviços escolhidos:*
${services.map((s) => `• ${s.name} — R$ ${s.price},00`).join("\n")}

*Total: R$ ${total},00*

${notes ? `📝 *Observação:* ${notes}` : ""}

Quais horários estão disponíveis?`;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
