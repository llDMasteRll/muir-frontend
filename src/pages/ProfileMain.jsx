import CourseCard from "../components/UI/CourseCard/CourseCard";
import styles from "../styles/ProfileMain.module.css";

const ProfileMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.avatar}></div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.textBlock}>
              <p>Name</p>
              <p>Yuriy</p>
            </div>

            <div className={styles.textBlock}>
              <p>Surname</p>
              <p>Bobrov</p>
            </div>

            <div className={styles.textBlock}>
              <p>Sign on</p>
              <p>25.10.2025</p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.textBlock}>
              <p>Rank</p>
              <p>Master</p>
            </div>

            <div className={styles.textBlock}>
              <p>Date of Birth</p>
              <p>01.01.1970</p>
            </div>

            <div className={styles.textBlock}>
              <p>Sign off</p>
              <p>24.02.2026</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.h2}> Recently viewed courses </h2>

      <div style={{display: "flex"}}>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
      

    </div>
  );
};

export default ProfileMain;
