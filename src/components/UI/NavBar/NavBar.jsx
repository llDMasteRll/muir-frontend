import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className={styles.nav}>
      {links.map((link, index) => (
        // Temporary check to set "active" to homepage (will be removed when routes are set up)
        !index ? 
        <a className={styles.active} key={index} href={link.path}>
          {link.label}
        </a>
        :
        <a key={index} href={link.path}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
