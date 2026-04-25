import styles from "../styles/CourseSidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const CourseSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    {
      label: "My Courses",
      path: "/crew/courses",
      hint: "Assigned learning",
      icon: "📘",
    },
    {
      label: "Progress",
      path: "/crew/progress",
      hint: "Track completion",
      icon: "📈",
    },
    {
      label: "Certificates",
      path: "/crew/certificates",
      hint: "My records",
      icon: "🏅",
    },
    {
      label: "Help",
      path: "/crew/help",
      hint: "Support",
      icon: "💬",
    },
  ];

  return (
    <aside className={styles.container}>
      <div className={styles.logoBlock}>
        <div className={styles.logoIcon}>🌊</div>

        <div className={styles.brandText}>
          <span className={styles.brandTitle}>Muireolais</span>
          <span className={styles.brandSubtitle}>Crew Learning</span>
        </div>
      </div>

      <div className={styles.sectionTitle}>Learning</div>

      <nav className={styles.nav}>
        {items.map((item) => {
          const active = pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              className={`${styles.navItem} ${active ? styles.active : ""}`}
              onClick={() => navigate(item.path)}
            >
              <span className={styles.iconWrap}>{item.icon}</span>

              <span className={styles.navText}>
                <span className={styles.navMain}>{item.label}</span>
                <span className={styles.navHint}>{item.hint}</span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className={styles.courseStatusBox}>
        <span className={styles.courseStatusLabel}>Current course</span>
        <span className={styles.courseStatusTitle}>Offshore Induction</span>
        <span className={styles.courseStatusMeta}>3 of 6 lessons completed</span>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: "50%" }} />
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;