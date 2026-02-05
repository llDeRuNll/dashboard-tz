import SectionCard from './SectionCard'
import styles from './PortfolioGoals.module.css'

const PortfolioGoals = ({ goals }) => {
  return (
    <SectionCard
      title="Portfolio Goals"
      action={<button className={styles.link}>View targets</button>}
    >
      <div className={styles.goals}>
        {goals.map((goal) => (
          <div key={goal.id} className={styles.goal}>
            <div className={styles.goalHeader}>
              <span>{goal.label}</span>
              <span className={styles.goalDetail}>{goal.detail}</span>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: `${goal.value}%` }} />
            </div>
            <div className={styles.goalValue}>{goal.value}%</div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

export default PortfolioGoals
