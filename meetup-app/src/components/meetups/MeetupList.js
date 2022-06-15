import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <div className={classes.list}>
      <li>
        {props.datas.map((data) => (
          <MeetupItem
            key={data.title}
            title={data.title}
            image={data.image}
            address={data.address}
            description={data.description}
          />
        ))}
      </li>
    </div>
  );
}
