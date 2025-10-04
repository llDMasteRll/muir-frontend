import { Outlet } from "react-router-dom";
import CaptainHeader from "../pages/CaptainHeader";

const RootLayout = () => {
  return (
    <>
      <CaptainHeader />
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default RootLayout;
