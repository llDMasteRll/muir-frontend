import { Outlet } from "react-router-dom";
import styles from "../styles/Login.module.css";

const LoginLayout = () => {
  return (
    <div className={styles.loginPage}>
      <Outlet />
    </div>
  );
};

export default LoginLayout;