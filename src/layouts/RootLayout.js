import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default RootLayout;
