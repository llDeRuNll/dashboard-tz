import { useState } from 'react'
import SectionCard from './SectionCard'
import styles from './QuickActions.module.css'

const QuickActions = ({ actions }) => {
  const [activeAction, setActiveAction] = useState(actions[0]?.id)

  return (
    <SectionCard title="Quick Actions">
      <div className={styles.quickActions}>
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            className={`${styles.button} ${activeAction === action.id ? styles.isActive : ''}`}
            onClick={() => setActiveAction(action.id)}
          >
            {action.label}
          </button>
        ))}
      </div>
      <p className={styles.helperText}>
        Selected action: <strong>{actions.find((item) => item.id === activeAction)?.label}</strong>
      </p>
    </SectionCard>
  )
}

export default QuickActions
