import { Outlet } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate();

    return (
        <div className={styles.loginBody}>
            <div className={styles.container}>

                <h2 className={styles.h2}> Login </h2>
                
                <Outlet />
            </div>
        </div>
    );
};

export default Login;