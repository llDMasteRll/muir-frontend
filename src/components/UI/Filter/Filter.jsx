import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <span className={styles.filter}>
      <svg
        className={styles.filter_icon}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 5H20L14 12V18L10 20V12L4 5Z"
          stroke="#3263bf"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default Filter;