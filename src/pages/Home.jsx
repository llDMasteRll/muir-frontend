import styles from "../styles/Home.module.css"; // Assuming you have a CSS module for styles

const Home = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div>
          <h2 className={styles.h2}>
            MuirEolais — guiding professionals through the ocean of knowledge
          </h2>

          <p className={styles.p}>
            A professional training platform enhancing the competence, safety awareness, and knowledge base of maritime personnel
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
