import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ name, color, backgroundColor, hoverColor, buttonBorders, borderLeft, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const customStyle = {
    color,
    backgroundColor: isHovered ? hoverColor : backgroundColor,
    color: isHovered ?  "#F0FAFF" : color,
    borderLeft,
  };

  const className = buttonBorders ? styles.border_button : styles.button;

  return (
    <button
      name={name}
      className={className}
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
