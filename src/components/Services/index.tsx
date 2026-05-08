import styles from "./styles.module.css";
import ServiceCard from "./ServiceCard";
import { nailServices } from "@/constants";
import { Service } from "@/types/service";

type ServicesProps = {
  selectedServices: Service[];
  setSelectedServices: React.Dispatch<React.SetStateAction<Service[]>>;
};

export default function Services({
  selectedServices,
  setSelectedServices,
}: ServicesProps) {

  return (
    <section className={styles.services}>
      <h3 className={styles.title}>Serviços e Valores</h3>
      <h1>Esclha o seu cuidado</h1>
      <ul>
        {nailServices.map((service) => (
          <ServiceCard 
          key={service.id} 
          service={service} 
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}/>
        ))}
      </ul>
    </section>
  );
}
