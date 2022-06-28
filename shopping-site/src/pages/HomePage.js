import React from "react";
import Banner from "../components/Banner/Banner";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className={classes.actions}>
        <Link to="/shop-all">
          <button>To Shops</button>
        </Link>
      </div>
    </div>
  );
}
