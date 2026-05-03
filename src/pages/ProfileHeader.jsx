import styles from "../styles/ProfileHeader.module.css";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
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

        <div className={styles.titleBlock}>
          <span className={styles.overline}>Crew Portal</span>
          <h1 className={styles.title}>Profile</h1>
        </div>
      </div>

      <div className={styles.right}>
        <button type="button" className={styles.iconButton} aria-label="Search">
          ⌕
        </button>

        <button type="button" className={styles.iconButton} aria-label="Notifications">
          🔔
        </button>

        <button type="button" className={styles.profileButton}>
          <span className={styles.avatar}>JD</span>

          <span className={styles.profileMeta}>
            <span className={styles.profileName}>John Doe</span>
            <span className={styles.profileRole}>Master</span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;