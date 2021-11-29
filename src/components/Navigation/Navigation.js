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
import NavBar from "./NavBar.js";
import Main from "../Main/Main.js";

const Navigation = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/genres" component={Genres}></Route>
        <Route path="/reviews/:id" component={Review}></Route>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/articles" component={Articles}></Route>
        <Route path="/user-profile" component={UserProfile}></Route>
        <Route path="/books/:id" component={Book}></Route>
        <Route path="/books" component={Books}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </div>
  );
};

export default Navigation;
