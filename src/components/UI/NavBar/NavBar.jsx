import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className={styles.nav}>
      {links.map((link, index) => (
        <a key={index} href={link.path}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
