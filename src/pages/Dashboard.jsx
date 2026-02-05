import AccountsTable from '../components/AccountsTable'
import MarketIntelligence from '../components/MarketIntelligence'
import PortfolioGoals from '../components/PortfolioGoals'
import QuickActions from '../components/QuickActions'
import WorkQueue from '../components/WorkQueue'
import styles from './Dashboard.module.css'
import {
  accounts,
  marketNews,
  portfolioGoals,
  quickActions,
  workQueueItems,
  workQueueTabs,
} from '../data/mockData'

const Dashboard = ({ onSelectAccount }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Portfolio Overview</p>
          <h1>Dashboard</h1>
          <p className={styles.subtitle}>Monitor priorities, accounts, and market signals.</p>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.buttonPrimary}`} type="button">
            Create submission
          </button>
          <button className={`${styles.button} ${styles.buttonGhost}`} type="button">
            Export view
          </button>
        </div>
      </header>
      <div className={styles.grid}>
        <div className={styles.main}>
          <WorkQueue tabs={workQueueTabs} items={workQueueItems} />
          <AccountsTable accounts={accounts} onSelectAccount={onSelectAccount} />
        </div>
        <div className={styles.side}>
          <PortfolioGoals goals={portfolioGoals} />
          <QuickActions actions={quickActions} />
          <MarketIntelligence news={marketNews} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
