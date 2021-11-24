import { Router } from "../Navigation/Navigation.js";
import Navigation from "../Navigation/Navigation.js";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>MYLIB</h1>
      <Navigation />
    </header>
  );
};

export default Header;
