import styles from "./SectionCard.module.css";

const SectionCard = ({ title, action, children }) => {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2>{title}</h2>
        {action && <div className={styles.action}>{action}</div>}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
};

export default SectionCard;
