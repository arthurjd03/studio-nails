export default function formatCurrency(value: number | string): string {
  const numericValue = Number(value);
  if (value === undefined || value === null || isNaN(numericValue))
    return "R$ 0,00";

  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
