import { useState } from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={styles.loginBody}>
  <div className={styles.loginCircle}>
    {/* SVG как overlay поверх круга */}
    <div className={styles.glassIconOverlay}>
      <img src="/images/Subtract.svg" alt="Muir Icon" />
    </div>

    {/* Контент внутри круга */}
    <div className={styles.contentWrapper}>
      <div className={styles.header}>
        <h2>Login</h2>
        <p>Company</p>
      </div>

      <form className={styles.formWrapper}>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" required />
        </div>
        <div className={styles.inputGroup}>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setPasswordVisible(!passwordVisible)}
          ></button>
        </div>
        <button type="submit" className={styles.loginButton}>Log In</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
