import { useState } from "react";
import styles from "../styles/ProfileSiderbar.module.css";

export const topics = [
  "Basic Safety",
  "Navigation",
  "Operations",
  "Maintenance",
  "Maritime law & International conventions",
  "Emergency preparedness",
  "Maritime security (ISPS)",
  "Maritime Labour Convention (MLC)",
  "Leadership & Management",
  "MODU",
];

const ProfileSidebar = () => {
  const [topicsOpen, setTopicsOpen] = useState(true);

  return (
    <aside
      className={styles.sidebar}
      style={{ position: "sticky", top: 25, bottom: "auto" }}
    >
      {/* ACCOUNT */}
      <div className={styles.section}>
        <button
          className={styles.sectionTitle}
          onClick={() => setTopicsOpen(!topicsOpen)}
        >
          Topics
          <span className={topicsOpen ? styles.arrowOpen : styles.arrow}>
            ▾
          </span>
        </button>

        {topicsOpen && (
          <ul className={styles.list}>
            {topics.map((element) => (
              <li
                key={element}
                onClick={() => {
                  const id = element.replace(/\s+/g, "-");
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                {element}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ProfileSidebar;
