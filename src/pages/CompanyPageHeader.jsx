import styles from "../styles/CompanyPageHeader.module.css";

const CompanyPageHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <button className={styles.notification}></button>
        <button className={styles.profile}></button>
      </div>
    </div>
  );
};

export default CompanyPageHeader;
