import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../store/meetupSlice";
export default function MeetupItem(props) {
  const dispatch = useDispatch();

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
          <button
            onClick={() =>
              dispatch(toggleFav({ id: props.id, isFav: !props.isFav }))
            }
          >
            {props.isFav ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </div>
    </Card>
  );
}
