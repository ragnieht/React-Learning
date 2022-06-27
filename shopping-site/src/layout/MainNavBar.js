import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavBar.module.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function MainNavBar() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <h3>LOGO</h3>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={classes.menu}>
            <Link to="/men">Men</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/men/tops">Tops</Link>
              </li>
              <li>
                <Link to="/men/bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/men/shoe">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.menu}>
            <Link to="/women">Women</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/women/tops">Tops</Link>
              </li>
              <li>
                <Link to="/women/bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/women/shoe">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.menu}>
            <Link to="/kids">Kids</Link>
            <ul className={classes.aniMenu}>
              <li>
                <Link to="/women/tops">Tops</Link>
              </li>
              <li>
                <Link to="/women/bottoms">Bottoms</Link>
              </li>
              <li>
                <Link to="/women/shoe">Shoes</Link>
              </li>
            </ul>
          </li>
          <li className={classes.shoppingCart}>
            <Link to="/shoppingCart">
              <ShoppingBagOutlinedIcon fontSize="large" />
              <span className={classes.badge}>5</span>
            </Link>
          </li>
          <li className={classes.favourites}>
            <Link to="/favourites">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
