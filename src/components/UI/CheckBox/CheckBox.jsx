import styles from "./Checkbox.module.css";

const CheckBox = () => {
  return (
    <label className={styles.checkBox}>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
