import styles from "../styles/CompanyPageSidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyPageSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { label: "Vessels", path: "/company/vessels" },
    { label: "Subscription", path: "/company/subscription" },
    { label: "Dashboard", path: "/company/dashboard" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoBlock}>
        <div className={styles.logo} onClick={() => navigate("/")} />
      </div>

      <div className={styles.NavLinks}>
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`${styles.sideRefs} ${pathname === item.path ? styles.active : ""}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyPageSidebar;
