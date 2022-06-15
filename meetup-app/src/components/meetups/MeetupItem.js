import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem(props) {
  return (
    <Card>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={props.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </div>
    </Card>
  );
}
