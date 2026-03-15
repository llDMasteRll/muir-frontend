import styles from "../styles/ProfileHeader.module.css";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ links }) => {
  const navigate = useNavigate();

  return (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <nav>
            <div className={styles.logo} onClick={() => navigate("/")}></div>
            <a onClick={() => navigate("/profile")} style={{cursor: "pointer"}}>Profile</a>
            <a onClick={() => navigate("/profile/courses")} style={{cursor: "pointer"}}>Courses</a>
          </nav>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.user}>
            <button className={styles.notification}></button>
            <button className={styles.profile}></button>
          </div>
        </div>
      </div>
  );
};

export default ProfileHeader;
