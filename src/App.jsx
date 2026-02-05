import styles from "./App.module.css";

import { accountDetails } from "./data/MockData";

import { useState } from "react";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const navItems = ["Dashboard", "Accounts", "Reports", "Settings"];
function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedAccount, setSelectedAccount] = useState(accountDetails);

  const handleNavSelect = (item) => {
    if (item === "Dashboard") {
      setActivePage("dashboard");
    }
    if (item === "Accounts") {
      setActivePage("account");
    }
  };

  const handleSelectAccount = (account) => {
    setSelectedAccount({ ...accountDetails, name: account.name });
    setActivePage("account");
  };

  const activeNav = activePage === "dashboard" ? "Dashboard" : "Accounts";

  return (
    <div className={styles.app}>
      <Navbar
        items={navItems}
        activeItem={activeNav}
        onSelect={handleNavSelect}
      />
      {activePage === "dashboard" ? (
        <Dashboard onSelectAccount={handleSelectAccount} />
      ) : (
        <Account account={selectedAccount} />
      )}
    </div>
  );
}

export default App;
