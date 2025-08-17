import React from "react";
import Button from "../Button/Button"
import styles from "./Search.module.css";

const Search = ({ name, type, placeholder }) => {
  return (
    <div className={styles.search}>
      <input name={name} type={type} placeholder={placeholder} />
      <Button>Ok</Button>
    </div>
  );
};

export default Search;
