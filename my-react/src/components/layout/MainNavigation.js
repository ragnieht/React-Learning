import React, { useContext } from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";

export default function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetups</Link>
            </li>
            <li>
              <Link to="/favourites">
                My Favourites
                <span className={classes.badge}>
                  {favouritesCtx.totalFavourites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
