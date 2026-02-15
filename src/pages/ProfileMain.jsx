import styles from "../styles/ProfileMain.module.css";

const ProfileMain = () => {
  return (
    <div class={styles.container}>
      <div class={styles.bar}>
        <div class={styles.avatar}></div>
        <div class={styles.mainInfo}>
          <h3>Profile Information</h3>
          <h4> Name Surname</h4>
          <h4> Date of birth: 01.01.2000</h4>
        </div>
      </div>
      <div class={styles.Info}>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio eum veniam accusamus hic error nisi culpa expedita, architecto atque itaque dolor non, aliquid fugit fuga! Molestiae corporis ab ea?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, provident?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, provident?</p>
      </div>
    </div>
  );
};

export default ProfileMain;
