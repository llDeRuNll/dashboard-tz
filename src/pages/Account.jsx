import { useState } from 'react'
import SectionCard from '../components/SectionCard'
import styles from './Account.module.css'

const Account = ({ account }) => {
  const [activeInfo, setActiveInfo] = useState(null)

  const toggleInfo = (id) => {
    setActiveInfo((prev) => (prev === id ? null : id))
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Account Profile</p>
          <h1>{account.name}</h1>
          <p className={styles.subtitle}>
            {account.industry} · {account.location} · Broker: {account.broker}
          </p>
        </div>
        <div className={styles.actions}>
          <div className={`${styles.pill} ${styles.pillPrimary}`}>Renewal {account.renewal}</div>
          <button className={`${styles.button} ${styles.buttonPrimary}`} type="button">
            Share update
          </button>
        </div>
      </header>

      <div className={styles.grid}>
        <SectionCard
          title="Performance Metrics"
          action={
            <button className={styles.iconButton} type="button" onClick={() => toggleInfo('metrics')}>
              i
            </button>
          }
        >
          {activeInfo === 'metrics' && (
            <div className={styles.infoCallout}>
              Metrics compare this account against the portfolio median for the last 90 days.
            </div>
          )}
          <div className={styles.metrics}>
            {account.performanceMetrics.map((metric) => (
              <div key={metric.id} className={styles.metric}>
                <span className={styles.metricLabel}>{metric.label}</span>
                <span
                  className={`${styles.metricTrend} ${
                    styles[`metricTrend${metric.trend}`]
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Policies" action={<button className={styles.link}>View details</button>}>
          <div className={styles.policies}>
            {account.policies.map((policy) => (
              <div key={policy.id} className={styles.policy}>
                <div>
                  <div className={styles.policyName}>{policy.name}</div>
                  <div className={styles.policyLimit}>Limit {policy.limit}</div>
                </div>
                <span className={`${styles.pill} ${styles.pillInfo}`}>{policy.status}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Account Status & Compliance"
          action={
            <button
              className={styles.iconButton}
              type="button"
              onClick={() => toggleInfo('compliance')}
            >
              i
            </button>
          }
        >
          {activeInfo === 'compliance' && (
            <div className={styles.infoCallout}>
              Next compliance check scheduled in 14 days.
            </div>
          )}
          <div className={styles.compliance}>
            {account.compliance.map((item) => (
              <div key={item.id} className={styles.complianceItem}>
                <span>{item.label}</span>
                <span className={`${styles.pill} ${styles.pillMuted}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Winnability">
          <div className={styles.winnability}>
            <div className={styles.winnabilityScore}>
              <span className={styles.score}>{account.winnability.score}</span>
              <span className={styles.scoreLabel}>Overall Score</span>
            </div>
            <div className={styles.winnabilityDrivers}>
              {account.winnability.drivers.map((driver) => (
                <div key={driver.id} className={styles.driver}>
                  <div className={styles.driverHeader}>
                    <span>{driver.label}</span>
                    <span>{driver.value}%</span>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.progressBar} style={{ width: `${driver.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.winnabilityRecommendations}>
              <h3>Recommendations</h3>
              <ul>
                {account.winnability.recommendations.map((rec) => (
                  <li key={rec}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Communication" action={<button className={styles.link}>Open inbox</button>}>
          <div className={styles.communications}>
            {account.communications.map((message) => (
              <div key={message.id} className={styles.message}>
                <div className={styles.messageHeader}>
                  <strong>{message.sender}</strong>
                  <span>{message.time}</span>
                </div>
                <p>{message.summary}</p>
                <div className={styles.messageAttachments}>
                  {message.attachments.map((file) => (
                    <span key={file} className={`${styles.chip} ${styles.chipMuted}`}>
                      {file}
                    </span>
                  ))}
                </div>
                <button className={`${styles.button} ${styles.buttonGhost}`} type="button">
                  Reply
                </button>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Policies Table">
          <table className={`${styles.table} ${styles.tableCompact}`}>
            <thead>
              <tr>
                <th>Policy ID</th>
                <th>Line</th>
                <th>Premium</th>
                <th>Status</th>
                <th>Renewal</th>
              </tr>
            </thead>
            <tbody>
              {account.policiesTable.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.id}</td>
                  <td>{policy.line}</td>
                  <td>{policy.premium}</td>
                  <td>
                    <span className={`${styles.pill} ${styles.pillInfo}`}>{policy.status}</span>
                  </td>
                  <td>{policy.renewal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>
      </div>
    </div>
  )
}

export default Account
