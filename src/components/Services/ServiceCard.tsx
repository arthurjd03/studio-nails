import { Service } from "@/types/service";
import styles from "./styles.module.css";

type ServiceCardProps = {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
};

export default function ServiceCard({
  service,
  isSelected,
  onToggle,
}: ServiceCardProps) {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
      onClick={onToggle}
    >
      <div className={styles.info}>
        <h3 className={styles.name}>{service.name}</h3>
        <p>{service.description}</p>
        <p>Tempo estimado: {service.duration}</p>
        <span className={styles.price}>
          {service.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isSelected}
        onChange={onToggle}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
