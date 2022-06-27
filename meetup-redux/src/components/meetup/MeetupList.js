import React, { useEffect } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <div className={classes.list}>
      <ul>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
            isFav={meetup.isFav}
          />
        ))}
      </ul>
    </div>
  );
}
