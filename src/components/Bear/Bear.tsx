import styles from "./styles.module.css"


export default function Bear() {
  return (
    <div className={styles.container}>
      <video
        src="/videos/animated-bear.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.bear}
      />
    </div>
  );
}