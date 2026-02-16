import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ links }) => {
  return (
    <nav className={styles.nav}>
      {links?.map((link, index) =>
        !index ? (
          <a className={styles.active} key={link.path} href={link.path}>
            {link.label}
          </a>
        ) : (
          <a key={link.path} href={link.path}>
            {link.label}
          </a>
        )
      )}
    </nav>
  );
};

export default NavBar;
