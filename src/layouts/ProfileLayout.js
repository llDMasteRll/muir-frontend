import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/ProfileHeader";
import ProfileSidebar from "../pages/ProfileSidebar";
import styles from "../styles/ProfileLayout.module.css";

const ProfileLayout = () => {
  return (
    <div className={styles.layout}>
      <ProfileSidebar />

      <div className={styles.main}>
        <ProfileHeader />

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfileLayout;