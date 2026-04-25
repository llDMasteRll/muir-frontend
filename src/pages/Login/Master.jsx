import { useState } from "react";
import styles from "../../styles/Pages.module.css";
import { useNavigate } from "react-router-dom";
import masterLogin from "../../API/post/masterLogin";

const Master = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [Ucode, setUcode] = useState("");
  const [error, setError] = useState(false); // одно общее для всех полей
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await masterLogin({ ship_email: email, ship_key: Ucode });

    if (token) {
      navigate("/master");
    } else {
      setError(true);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setError(false); // сброс ошибки при любом изменении
  };

  const inputClass = `${styles.input} ${error ? styles.incorrect : ""}`;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={handleInputChange(setEmail)}
        placeholder="Ship email"
        className={inputClass}
      />

      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          value={Ucode}
          onChange={handleInputChange(setUcode)}
          placeholder="Unique code"
          className={`${styles.passwordInput} ${inputClass}`}
        />

        <div
          onClick={() => setShowPassword(!showPassword)}
          className={`${styles.eyeIcon} ${showPassword ? styles["bg-password-eye-on"] : styles["bg-password-eye-off"]}`}
        />
      </div>

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
      {error && <p style={{ color: "rgb(233, 0, 0)" }}>Incorrect login or password</p>}
    </form>
  );
};

export default Master;
