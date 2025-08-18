import React from "react";
import Button from "../components/UI/Button/Button";
import Search from "../components/UI/Search/Search";
import NavBar from "../components/UI/NavBar/NavBar";

const Header = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/", label: "Courses" },
    { path: "/", label: "News" },
    { path: "/", label: "Contacts" },
  ];

  return (
    <header>
      <div className="container">
        <a href="/">
          <img style={{width: "100%", height: "100%"}} src="/Logo.svg"></img>
        </a>
        <NavBar links={links} />

        <Search name="search" type="text" placeholder="Search" />

        <Button name="login">Log in</Button>
      </div>
    </header>
  );
};

export default Header;
