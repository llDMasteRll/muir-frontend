import { useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [slide, setSlide] = useState(false);
    const [target, setTarget] = useState(""); // куда перейти

    const handleRedirect = (path) => {
        setTarget(path);
        setSlide(true);
        // ждем окончания анимации
        setTimeout(() => {
            navigate(path);
        }, 300); // 500ms совпадает с длительностью анимации
    };

    return (
        <>
            <button
                className={`${styles.redirectButton} ${slide ? styles.slideLeft : ""}`}
                onClick={() => handleRedirect("/login/company")}
            >
                Company
                <div className={`${styles.icons} ${styles.icon1}`}></div>
            </button>

            <button
                className={`${styles.redirectButton} ${slide ? styles.slideLeft : ""}`}
                onClick={() => handleRedirect("/login/master")}
            >
                Master
                <div className={`${styles.icons} ${styles.icon2}`}></div>
            </button>

            <button
                className={`${styles.redirectButton} ${slide ? styles.slideLeft : ""}`}
                onClick={() => handleRedirect("/login/crew")}
            >
                Crew
                <div className={`${styles.icons} ${styles.icon3}`}></div>
            </button>

            <button
                type="submit"
                className={`${styles.loginButton}`}
            >
                Continue
            </button>
        </>
    );
};

export default Login;