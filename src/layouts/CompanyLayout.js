import { Outlet } from "react-router-dom";
import CompanyPageHeader from "../pages/CompanyPageHeader";
import CompanyPageSidebar from "../pages/CompanyPageSidebar";
import styles from "../styles/CompanyLayout.module.css";

const CompanyLayout = () => {
  return (
    <div className={styles.layout}>

      <CompanyPageSidebar />

      <div className={styles.main}>
        <CompanyPageHeader />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default CompanyLayout;