import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNav.module.css";

function MainNavigation() {

  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favuorites">My Favorites <span>{favoritesCtx.totalFavorites</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
