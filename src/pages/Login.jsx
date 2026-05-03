import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [selectedPortal, setSelectedPortal] = useState("crew");

  const handleContinue = () => {
    if (selectedPortal === "company") {
      navigate("/login/company");
      return;
    }
    navigate("/login/crew");
  };

  return (
    <div className={styles.pageInner}>
      
      {/* LEFT SIDE */}
      <section className={styles.brandPanel}>
        
        {/* ✅ ЛОГО */}
        <div
          className={styles.logoWrapper}
          onClick={() => navigate("/")}
        >
          <img
            src="/images/Muir_icon.svg"
            alt="Muireolais logo"
            className={styles.brandLogo}
          />
        </div>

        <div>
          <span className={styles.brandOverline}>Muireolais</span>
          <h1 className={styles.brandTitle}>
            Maritime safety training, made clear.
          </h1>
          <p className={styles.brandText}>
            Access fleet management tools or continue assigned safety learning
            from one secure platform.
          </p>
        </div>

        <div className={styles.brandStats}>
          <div className={styles.brandStat}>
            <b>24/7</b>
            <span>Learning access</span>
          </div>

          <div className={styles.brandStat}>
            <b>QHSE</b>
            <span>Safety focused</span>
          </div>

          <div className={styles.brandStat}>
            <b>Fleet</b>
            <span>Company ready</span>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className={styles.loginCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardOverline}>Welcome back</span>
          <h2 className={styles.cardTitle}>Choose your portal</h2>
          <p className={styles.cardText}>
            Select the workspace you want to enter.
          </p>
        </div>

        <div className={styles.portalList}>
          <button
            type="button"
            className={`${styles.portalButton} ${
              selectedPortal === "crew" ? styles.portalActive : ""
            }`}
            onClick={() => setSelectedPortal("crew")}
          >
            <span className={styles.portalIcon}>👨‍✈️</span>

            <span className={styles.portalText}>
              <span className={styles.portalTitle}>Crew Portal</span>
              <span className={styles.portalHint}>
                Courses, progress, certificates
              </span>
            </span>

            <span className={styles.portalCheck}>
              {selectedPortal === "crew" ? "✓" : ""}
            </span>
          </button>

          <button
            type="button"
            className={`${styles.portalButton} ${
              selectedPortal === "company" ? styles.portalActive : ""
            }`}
            onClick={() => setSelectedPortal("company")}
          >
            <span className={styles.portalIcon}>🏢</span>

            <span className={styles.portalText}>
              <span className={styles.portalTitle}>Company Portal</span>
              <span className={styles.portalHint}>
                Fleet, crew overview, subscriptions
              </span>
            </span>

            <span className={styles.portalCheck}>
              {selectedPortal === "company" ? "✓" : ""}
            </span>
          </button>
        </div>

        <button
          type="button"
          className={styles.continueButton}
          onClick={handleContinue}
        >
          Continue
        </button>

        <p className={styles.footerText}>
          Masters can manage assigned crew after signing in through the relevant
          portal.
        </p>
      </section>
    </div>
  );
};

export default Login;