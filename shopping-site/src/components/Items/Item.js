import React from "react";
import classes from "./Item.module.css";

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
    </div>
  );
}
