import { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  selectedServices: Service[];
  setSelectedServices: React.Dispatch<React.SetStateAction<Service[]>>;
};
export default function ServiceCard({ service, selectedServices, setSelectedServices }: ServiceCardProps) {

  const isSelected = selectedServices.some((item) => item.id === service.id
) 
function toggleService() {
  if (isSelected) {
    setSelectedServices(
      selectedServices.filter((item) => item.id !== service.id)
    )
  } else {
    setSelectedServices([...selectedServices, service])
  }
}

  return (
    <li onClick={toggleService}>
      {service.name} - R$ {service.price}
    </li>
  );
}
