import styles from "../styles/MasterHeader.module.css"; // Assuming you have a CSS module for styles
import Button from "../components/UI/Button/Button";

const MasterHeader = ({ links }) => {
  // Will be replaced with request to backend
  const data = {
    name: "Ship1372",
    email: "ship1372@email.com",
  };
// style={{ backgroundColor: "#F0FAFF" }}
  return (
    <header>
      <div className={`container ${styles.underscore}`}>
        <h1 className="ship_name">{data.name}</h1>
        <div className={styles.buttons}>
          <Button>Help</Button>
          <a href={links.landing}>
            <Button
              onClick={() => {
                localStorage.removeItem("crewPage");
              }}
            >
              Log out
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default MasterHeader;
