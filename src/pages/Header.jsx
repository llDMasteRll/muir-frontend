import Button from "../components/UI/Button/Button";
import Search from "../components/UI/Search/Search";
import NavBar from "../components/UI/NavBar/NavBar";

const Header = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/captain", label: "Captain" },
    { path: "/", label: "News" },
    { path: "/", label: "Contacts" },
  ];

  return (
    <header>
      <div className="container">
        <a href="/">
          <img style={{width: "125px", height: "40px"}} src="/Logo.svg"></img>
        </a>
        <NavBar links={links} />

        <Search name="search" type="text" placeholder="Search" buttonContent="Ok"/>

        <Button name="login">Log in</Button>
      </div>
    </header>
  );
};

export default Header;
