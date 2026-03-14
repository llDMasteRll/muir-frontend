import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({
  name,
  className,
  borderedButton, // Set true if you need a button with transparent background
  children,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = borderedButton ? styles.border_button : styles.button;

  return (
    <button
      name={name}
      className={`${style} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
