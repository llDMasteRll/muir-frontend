import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/ProfileHeader";
import styles from "../styles/ProfileLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <ProfileHeader />

      <Outlet /> {/* This renders the nested route content */}

    </>
  );
};

export default RootLayout;
