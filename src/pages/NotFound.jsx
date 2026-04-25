import styles from "../styles/NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Background image */}
      <div className={styles.bg} />

      {/* Overlay content */}
      <div className={styles.overlay}>
        <span className={styles.kicker}>PAGE NOT FOUND</span>

        <h1 className={styles.title}>
          The page you're looking
          <br />
          for is off course.
        </h1>

        <p className={styles.text}>
          The route may have changed, the page may no longer exist,
          or the address may be incorrect.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </button>

          <button
            className={styles.secondaryButton}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;