import { Service } from "@/types/service";

type PriceCalculatorProps = {
  selectedServices: Service[];
};

export default function PriceCalculator({
  selectedServices,
}: PriceCalculatorProps) {
  const total = selectedServices.reduce(
    (preco, service) => preco + service.price,
    0,
  );

  return (
    <section>
      <h2>Resumo</h2>

      <ul>
        {selectedServices.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>

      <p>Total: R$ {total}</p>

      <button>Agendar no WhatsApp</button>
    </section>
  );
}
