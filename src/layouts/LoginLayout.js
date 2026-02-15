import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default RootLayout;
