import styles from "../styles/Courses.module.css";
import CourseCard from "../components/UI/CourseCard/CourseCard";
import { topics } from "../pages/ProfileSidebar2";

const Courses = () => {
  return (
    <div className={`${styles.main}`}>
      {topics.map((topic) => (
        <div
          key={topic}
          id={topic.replace(/\s+/g, "-")} // id без пробелов
          className={styles.container}
        >
          <h2 className={styles.h2}>{topic}</h2>

          <div style={{ position: "relative" }}>
            <div className={styles.arrows}>
              <button className={`${styles.arrow} ${styles.arrow_left}`} />
              <button className={`${styles.arrow} ${styles.arrow_right}`} />
            </div>

            <div className={styles.courses_block}>
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
