import { Outlet } from "react-router-dom";
import CaptainHeader from "../pages/CaptainHeader";

const LoginLayout = ({links}) => {
  return (
    <>
      <CaptainHeader links={links} />
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default LoginLayout;
