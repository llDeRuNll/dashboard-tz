import styles from "./Dashboard.module.css";

import WorkQueue from "../../components/WorkQueue/WorkQueue";
import AccountsTable from "../../components/AccountsTable/AccountsTable";
import PortfolioGoals from "../../components/PortfolioGoals/PortfolioGoals";
import QuickActions from "../../components/QuickActions/QuickActions";
import MarketIntelligence from "../../components/MarketIntelligence/MarketIntelligence";
import {
  accounts,
  marketNews,
  portfolioGoals,
  quickActions,
  workQueueItems,
  workQueueTabs,
} from "../../data/MockData";

const Dashboard = ({ onSelectAccount }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Portfolio Overview</p>
          <h1>Dashboard</h1>
          <p className={styles.subtitle}>
            Monitor priorities, accounts, and market signals.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.buttonPrimary}`}
            type="button"
          >
            Create submission
          </button>
          <button
            className={`${styles.button} ${styles.buttonGhost}`}
            type="button"
          >
            Export view
          </button>
        </div>
      </header>
      <div className={styles.grid}>
        <div className={styles.main}>
          <WorkQueue tabs={workQueueTabs} items={workQueueItems} />
          <AccountsTable
            accounts={accounts}
            onSelectAccount={onSelectAccount}
          />
        </div>
        <div className={styles.side}>
          <PortfolioGoals goals={portfolioGoals} />
          <QuickActions actions={quickActions} />
          <MarketIntelligence news={marketNews} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
