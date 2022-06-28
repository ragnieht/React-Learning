import React from "react";
// import classes from "./MainItemsDisplay.module.css";
import SideNavBar from "../layout/SideNavBar";
import ItemList from "./ItemList";

export default function MainItemsDisplay(props) {
  return (
    <SideNavBar>
      <div>
        <ItemList items={props.items} />
      </div>
    </SideNavBar>
  );
}
