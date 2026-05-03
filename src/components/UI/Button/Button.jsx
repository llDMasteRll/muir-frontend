import React from "react";
import styles from "./Button.module.css";

const Button = ({
  name,
  className,
  borderedButton,
  children,
  onClick,
  disabled,
  type = "button",
}) => {
  const style = borderedButton ? styles.border_button : styles.button;

  return (
    <button
      type={type}
      name={name}
      className={`${style} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;