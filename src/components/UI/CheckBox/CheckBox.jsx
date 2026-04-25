import styles from "./Checkbox.module.css";

const CheckBox = ({ className, checked, onChange }) => {
  return (
    <label className={styles.checkBox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={`${className} ${styles.checkmark} `}></span>
    </label>
  );
};

export default CheckBox;
