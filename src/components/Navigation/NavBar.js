import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Login from "../Login/Login.js";
import Genres from "../Genres/Genres.js";
import UserProfile from "../UserProfile/UserProfile.js";
import Review from "../Reviews/Review.js";
import Reviews from "../Reviews/Reviews.js";
import Articles from "../Articles/Articles.js";
import Book from "../Books/Book.js";
import Books from "../Books/Books.js";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink to="/genres">Genres</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/user-profile">My page</NavLink>
      <NavLink to="/books">All books</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default NavBar;
