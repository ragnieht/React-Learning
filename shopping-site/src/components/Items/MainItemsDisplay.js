import React from "react";
// import classes from "./MainItemsDisplay.module.css";
import ItemList from "./ItemList";

export default function MainItemsDisplay(props) {
  return (
    <div>
      <ItemList items={props.items} />
    </div>
  );
}
