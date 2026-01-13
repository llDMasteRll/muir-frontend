import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({
  name,
  color,
  backgroundColor,
  hoverColor,
  buttonBorders,
  borderLeft,
  className,
  onClick,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const customStyle = {
    backgroundColor: isHovered ? hoverColor : backgroundColor,
    color: isHovered ? "#F0FAFF" : color, // keep only one 'color'
    borderLeft,
  };

  const baseClass = buttonBorders ? styles.border_button : styles.button;

  return (
    <button
      name={name}
      className={`${baseClass} ${className || ""}`} // merge classes
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
