import { Outlet, useLocation } from "react-router-dom";
import ProfileHeader from "../pages/ProfileHeader";
import ProfileSidebar from "../pages/ProfileSidebar";
import ProfileSidebar2 from "../pages/ProfileSidebar2";
import styles from "../styles/ProfileLayout.module.css";
import { topics } from "../pages/ProfileSidebar2";

const RootLayout = ({ links }) => {
  const location = useLocation();
  const isCoursesPage = location.pathname.includes("/courses");

  const asideHeight = isCoursesPage ? topics.length * 619 : 0;

  return (
    <>
    
    <div className={styles.body}>
      <ProfileHeader links={{ links }} />

      <div className={styles.container}>
        <div className={styles.ASide} style={{ height: asideHeight }}>
          <ProfileSidebar />
          {isCoursesPage && <ProfileSidebar2 />}
        </div>

        <Outlet />
      </div>
    </div>
    <div className={styles.ocean_background} style={{ height: `calc(${asideHeight}px + 109px)` }}></div>
    </>
  );
};

export default RootLayout;
