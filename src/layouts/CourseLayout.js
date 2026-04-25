import { Outlet } from "react-router-dom";
import CourseHeader from "../pages/CourseHeader";
import CourseSidebar from "../pages/CourseSidebar";
import styles from "../styles/CourseLayout.module.css";

const CourseLayout = () => {
  return (
    <div className={styles.layout}>
      <CourseSidebar />

      <div className={styles.main}>
        <CourseHeader />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;