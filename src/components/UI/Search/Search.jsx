import Button from "../Button/Button";
import styles from "./Search.module.css";
import icon from "./Search_icon(1).svg";
import { useState } from "react";

const Search = ({
  name,
  type,
  placeholder,
  height,
  width,
  color,
  buttonContent,
  buttonColor,
  buttonBorders = 0,
  maxLength = 80
}) => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className={styles.search} style={{ height, width }}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ color }}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button
        borderLeft="0"
        backgroundColor={buttonColor}
        buttonBorders={buttonBorders}
        hoverColor={buttonColor ? "transperent" : ""}
      >
        {buttonContent ? buttonContent : <img src={icon} alt="Search Icon" />}
      </Button>
    </div>
  );
};

export default Search;

// Need to add more optional settings
// Need to add transformation into search circle for mobiles

// Usage example:
// <Search name="search" type="text" placeholder="Search" />
