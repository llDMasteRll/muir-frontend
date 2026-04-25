import styles from "../styles/CourseHeader.module.css";
import { useNavigate } from "react-router-dom";

const CourseHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className={styles.brand}>
          <span className={styles.brandTitle}>Muireolais</span>
          <span className={styles.brandSubtitle}>Maritime Safety Platform</span>
        </div>
      </div>

      <div className={styles.right}>
        <button type="button" className={styles.iconButton} aria-label="Search">
          ⌕
        </button>
        <button type="button" className={styles.iconButton} aria-label="Notifications">
          🔔
        </button>

        <div className={styles.profile}>
          <span className={styles.avatar}>I</span>
          <div className={styles.profileMeta}>
            <span className={styles.profileName}>Ivan Bobrov</span>
            <span className={styles.profileRole}>Master</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;