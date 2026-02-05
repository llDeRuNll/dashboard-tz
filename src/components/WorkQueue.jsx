import { useState } from 'react'
import SectionCard from './SectionCard'
import styles from './WorkQueue.module.css'

const WorkQueue = ({ tabs, items }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  return (
    <SectionCard
      title="Work Queue"
      action={<span className={`${styles.chip} ${styles.chipMuted}`}>12 items</span>}
    >
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${activeTab === tab.id ? styles.isActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Workstream</th>
            <th>Owner</th>
            <th>Due</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {items[activeTab]?.map((row) => (
            <tr key={row.id}>
              <td>
                <div className={styles.tableTitle}>{row.name}</div>
                <div className={styles.tableSub}>{row.id}</div>
              </td>
              <td>{row.owner}</td>
              <td>{row.due}</td>
              <td>
                <span
                  className={`${styles.pill} ${
                    styles[`pill${row.priority.toLowerCase()}`] || styles.pillInfo
                  }`}
                >
                  {row.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  )
}

export default WorkQueue
