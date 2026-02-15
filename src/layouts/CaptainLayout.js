import { Outlet } from "react-router-dom";
import CaptainHeader from "../pages/CaptainHeader";

const CaptainLayout = ({links}) => {
  return (
    <>
      <CaptainHeader links={links} />
      <Outlet /> {/* This renders the nested route content */}
    </>
  );
};

export default CaptainLayout;
