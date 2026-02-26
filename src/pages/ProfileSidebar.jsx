import { useState } from "react";
import styles from "../styles/ProfileSiderbar.module.css";

const ProfileSidebar = () => {
  const [accountOpen, setAccountOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(true);

  return (
    <aside className={styles.sidebar}>
      {/* ACCOUNT */}
      <div className={styles.section}>
        <button
          className={styles.sectionTitle}
          onClick={() => setAccountOpen(!accountOpen)}
        >
          Account
          <span className={accountOpen ? styles.arrowOpen : styles.arrow}>
            ▾
          </span>
        </button>

        {accountOpen && (
          <ul className={styles.list}>
            <li>Main</li>
            <li>Statistic</li>
            <li>Certificates</li>
            <li>My courses</li>
          </ul>
        )}
      </div>

      {/* SETTINGS */}
      <div className={styles.section}>
        <button
          className={styles.sectionTitle}
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          Settings
          <span className={settingsOpen ? styles.arrowOpen : styles.arrow}>
            ▾
          </span>
        </button>

        {settingsOpen && (
          <ul className={styles.list}>
            <li>Security</li>
            <li>Theme</li>
            <li>Devices</li>
            <li>Notifications</li>
            <li>Language</li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ProfileSidebar;
