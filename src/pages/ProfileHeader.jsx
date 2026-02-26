import styles from "../styles/ProfileHeader.module.css";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ links }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <nav>
            <div className={styles.logo} onClick={() => navigate("/")}></div>
            <a onClick={() => navigate("/profile")} style={{cursor: "pointer"}}>Profile</a>
            <a onClick={() => navigate("./courses")} style={{cursor: "pointer"}}>Course</a>
          </nav>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.user}>
            <button className={styles.notification}></button>
            <button className={styles.profile}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
