import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // временная проверка на валидность email и пароля только для тестирования
    if (email === "admin@mail.com" && password === "123") {
      navigate("/profile");
    } else {
      setError("Неверный email или пароль");
    }
  };

  return (
    <div className={styles.loginBody}>
      <div className={styles.circle}>
        <div className={styles.bg_logo}></div>
        <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h2>Login</h2>
          <p>Company</p>
        </div>

        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required />
          </div>
          <div className={styles.inputGroup}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           {/*<button
              type="button"
              className={styles.eyeButton}
              onClick={() => setPasswordVisible(!passwordVisible)}
            ></button>*/}
          </div>
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
      </div>
      </div>

      {/* Контент внутри круга */}
    </div>
  );
};

export default Login;
