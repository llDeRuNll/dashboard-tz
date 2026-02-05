import { useMemo, useState } from "react";

import styles from "./AccountsTable.module.css";
import SectionCard from "../SectionCard/SectionCard";

const statusClasses = {
  "In Review": "pillInfo",
  "Pending Docs": "pillWarning",
  Quoted: "pillSuccess",
  Bound: "pillPrimary",
};

const triageClasses = {
  Priority: "chipPriority",
  Watch: "chipWarning",
  Standard: "chipMuted",
};

const AccountsTable = ({ accounts, onSelectAccount }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      const matchesFilter = filter === "All" || account.triage === filter;
      const matchesSearch = account.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [accounts, filter, search]);

  return (
    <SectionCard
      title="My Accounts"
      action={
        <div className={styles.filters}>
          <input
            className={styles.search}
            type="search"
            placeholder="Search accounts"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {["All", "Priority", "Watch", "Standard"].map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.chip} ${
                filter === item ? styles.chipActive : styles.chipMuted
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      }
    >
      <table className={`${styles.table} ${styles.tableCompact}`}>
        <thead>
          <tr>
            <th>Account</th>
            <th>Segment</th>
            <th>Triage</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Premium</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.map((account) => (
            <tr key={account.id}>
              <td>
                <div className={styles.tableTitle}>{account.name}</div>
                <div className={styles.tableSub}>{account.id}</div>
              </td>
              <td>{account.segment}</td>
              <td>
                <span
                  className={`${styles.chip} ${styles[triageClasses[account.triage]]}`}
                >
                  {account.triage}
                </span>
              </td>
              <td>
                <span
                  className={`${styles.pill} ${
                    styles[statusClasses[account.status]] || styles.pillInfo
                  }`}
                >
                  {account.status}
                </span>
              </td>
              <td>{account.owner}</td>
              <td>{account.premium}</td>
              <td>
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => onSelectAccount(account)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  );
};

export default AccountsTable;
