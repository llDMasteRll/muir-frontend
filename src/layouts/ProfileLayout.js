import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/ProfileHeader";
import ProfileSidebar from "../pages/ProfileSidebar";
import styles from "../styles/ProfileLayout.module.css";

const RootLayout = ({ links }) => {
  return (
    <div style={{backgroundColor:"#7ba7c526", height: "100vh"}}>
      <ProfileHeader links={{ links }} />

       <div className={styles.container}>
              <ProfileSidebar />
              <Outlet /> {/* This renders the nested route content */}
       </div>
    </div>
  );
};

export default RootLayout;
