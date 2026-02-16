import styles from "../styles/ProfileHeader.module.css";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ links }) => {
  const navigate = useNavigate();

  return (
    <div style = {{backgroundColor: "#F0FAFF "}}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <nav>
            <a href="/" style = {{height: "45px"}}>
              <img
                style={{ width: "55px", height: "100%" }}
                src="/images/Muir_icon.svg"
              ></img>
            </a>
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
