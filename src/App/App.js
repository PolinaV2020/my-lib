import React from "react";
import Login from "../components/Login/Login.js";
import { Route, NavLink, Switch } from "react-router-dom";
import Genres from "../components/Genres/Genres.js";
import UserProfile from "../components/UserProfile/UserProfile.js";
import Review from "../components/Reviews/Review.js";
import Reviews from "../components/Reviews/Reviews.js";
import Articles from "../components/Articles/Articles.js";
import Book from "../components/Books/Book.js";
import Books from "../components/Books/Books.js";

const App = (props) => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/genres">Genres</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/user-profile">My page</NavLink>
        </li>
        <li>
          <NavLink to="/books">All books</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </nav>
      <Switch>
        <Route path="/genres" component={Genres}></Route>
        <Route path="/reviews/:id" component={Review}></Route>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/articles" component={Articles}></Route>
        <Route path="/user-profile" component={UserProfile}></Route>
        <Route path="/books/:id" component={Book}></Route>
        <Route path="/books" component={Books}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
};

export default App;
