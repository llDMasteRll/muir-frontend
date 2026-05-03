import { useState } from "react";
import styles from "../../styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [Ucode, setUcode] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "maersk@muireolais.com" && Ucode === "123") {
      navigate("/company/vessels");
    } else {
      setError(true);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setError(false);
  };

  return (
    <div className={styles.pageCenter}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <span className={styles.overline}>Company Portal</span>
            <h2>Fleet workspace</h2>
            <p>Sign in with your corporate email and company access code.</p>
          </div>

          <input
            type="text"
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder="maersk@muireolais.com"
            className={`${styles.input} ${error ? styles.incorrect : ""}`}
          />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              value={Ucode}
              onChange={handleInputChange(setUcode)}
              placeholder="Enter access code"
              className={`${styles.input} ${error ? styles.incorrect : ""}`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeButton}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {error && (
            <div className={styles.errorBox}>
              Incorrect email or unique code
            </div>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={styles.backButton}
            >
              Back
            </button>

            <button type="submit" className={styles.loginButton}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Company;
