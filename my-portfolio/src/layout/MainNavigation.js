import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MainNavigation.css";
import HomeIcon from "@mui/icons-material/Home";

export default function MainNavigation() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h1>T</h1>
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <HomeIcon
            className="nav-bar-icons"
            fontSize="large"
            color="inherit"
          />
        </NavLink>
        <NavLink exact="true" activeClassName="active" to="/test">
          <HomeIcon
            className="nav-bar-icons"
            fontSize="large"
            color="inherit"
          />
        </NavLink>
        <NavLink exact="true" activeClassName="active" to="/testest">
          <HomeIcon
            className="nav-bar-icons"
            fontSize="large"
            color="inherit"
          />
        </NavLink>
      </nav>
    </div>
  );
}
