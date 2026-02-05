import SectionCard from "../SectionCard/SectionCard";
import styles from "./MarketIntelligence.module.css";

const MarketIntelligence = ({ news }) => {
  return (
    <SectionCard
      title="Market Intelligence"
      action={<button className={styles.link}>See all</button>}
    >
      <div className={styles.news}>
        {news.map((item) => (
          <article key={item.id} className={styles.item}>
            <div>
              <h3>{item.title}</h3>
              <p>
                {item.source} · {item.time}
              </p>
            </div>
            <button
              className={styles.iconButton}
              type="button"
              aria-label="Open news item"
            >
              ↗
            </button>
          </article>
        ))}
      </div>
    </SectionCard>
  );
};

export default MarketIntelligence;
