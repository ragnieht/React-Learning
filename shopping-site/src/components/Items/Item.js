import React from "react";
import classes from "./Item.module.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button } from "@mui/material";

export default function Item(props) {
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <li>
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </li>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <Button
          variant="outlined"
          startIcon={<FavoriteBorderOutlinedIcon />}
          className={classes.button}
        >
          To Favourites
        </Button>
        <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>
          To Cart
        </Button>
      </div>
    </div>
  );
}
