import styles from "../styles/CompanyPageSidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyPageSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    {
      label: "Dashboard",
      path: "/company/dashboard",
      icon: "📊",
      hint: "Performance metrics",
    },
    {
      label: "Vessels",
      path: "/company/vessels",
      icon: "🚢",
      hint: "Fleet overview",
    },
    {
      label: "Subscription",
      path: "/company/subscription",
      icon: "💳",
      hint: "Plan & billing",
    },
  ];

  return (
    <aside className={styles.container}>
      <div className={styles.topGlow} />

      <div className={styles.logoBlock}>
        <button
          type="button"
          className={styles.logoButton}
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <div className={styles.logo} />
        </button>

        <div className={styles.brandText}>
          <span className={styles.brandTitle}>Muireolais</span>
          <span className={styles.brandSubtitle}>Company Panel</span>
        </div>
      </div>

      <div className={styles.sectionLabel}>Navigation</div>

      <nav className={styles.navLinks}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              className={`${styles.sideRef} ${isActive ? styles.active : ""}`}
              onClick={() => navigate(item.path)}
            >
              <span className={styles.activeBar} />

              <span className={styles.iconWrap}>{item.icon}</span>

              <span className={styles.textWrap}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.hint}>{item.hint}</span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className={styles.bottomCard}>
        <span className={styles.bottomCardTitle}>Fleet status</span>
        <span className={styles.bottomCardValue}>13 vessels</span>
        <span className={styles.bottomCardHint}>
          Operations running normally
        </span>
      </div>
    </aside>
  );
};

export default CompanyPageSidebar;
