import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Genres from "../Genres/Genres.js";
import UserProfile from "../UserProfile/UserProfile.js";
import Reviews from "../Reviews/Reviews.js";

const Navigation = (props) => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/genres">Genres</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/user-profile">My page</NavLink>
        </li>
      </nav>
      <Switch>
        <Route path="/genres" component={Genres}></Route>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/user-profile" component={UserProfile}></Route>
      </Switch>
    </div>
  );
};

export default Navigation;
