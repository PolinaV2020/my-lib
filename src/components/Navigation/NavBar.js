import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoWrapper}>
      <NavLink className={classes.logo} to="/">
        MYLIB
      </NavLink>
      </div>
      <div className={classes.navbarOptions}>
        <NavLink className={classes.navLink} to="/genres">
          Genres
        </NavLink>
        <NavLink className={classes.navLink} to="/articles">
          Articles
        </NavLink>
        <NavLink className={classes.navLink} to="/reviews">
          Reviews
        </NavLink>
        <NavLink className={classes.navLink} to="/user-profile">
          My page
        </NavLink>
        <NavLink className={classes.navLink} to="/books">
          All books
        </NavLink>
        <NavLink className={classes.navLink} to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
