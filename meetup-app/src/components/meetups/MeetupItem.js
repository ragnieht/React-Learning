import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useHistory } from "react-router-dom";

export default function MeetupItem(props) {
  const history = useHistory();
  function toFavHandler() {
    fetch(
      `https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/favourites.json`,
      {
        method: "POST",
        body: JSON.stringify(props),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/favourites");
    });
  }
  return (
    <Card>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toFavHandler}>To Favourites</button>
        </div>
      </div>
    </Card>
  );
}
