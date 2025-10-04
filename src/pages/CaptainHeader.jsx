import styles from "../styles/CaptainHeader.module.css"; // Assuming you have a CSS module for styles
import Button from "../components/UI/Button/Button";

const CaptainHeader = () => {
  // Will be replaced with request to backend
  const data = {
    name: "Ship1372",
    email: "ship1372@email.com",
  };

  return (
    <header>
      <div className={`container ${styles.underscore}`}>
        <h1 className="ship_name">{data.name}, welcome to Muir!</h1>
        <h2 className="email">Email: {data.email}</h2>
        <Button>Password</Button>
        <Button>Documentation</Button>
        <Button>Log out</Button>
      </div>
    </header>
  );
};

export default CaptainHeader;
