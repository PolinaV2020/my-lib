import { Router } from "../Navigation/Navigation.js";
import Navigation from "../Navigation/Navigation.js";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
