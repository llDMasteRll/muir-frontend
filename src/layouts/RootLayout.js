import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

const RootLayout = ({links}) => {
  return (
    <>
      <Header links={links}/>
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default RootLayout;
