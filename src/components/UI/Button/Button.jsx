import React from 'react';
import styles from "./Button.module.css"

const Button = ({name, children}) => {
    return (
        <button name={name} className={styles.button}>{children}</button>
    );
}

export default Button;
