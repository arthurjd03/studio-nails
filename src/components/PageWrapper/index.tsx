import styles from "./styles.module.css";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className={styles.container}>{children}</div>;
}
