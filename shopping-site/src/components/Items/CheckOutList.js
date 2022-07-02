import React from "react";
import CheckOutItems from "./CheckOutItems";
import classes from "./CheckOutList.module.css";
export default function CheckOutList(props) {
  return (
    <div className={classes.container}>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <ul className={classes.list}>
        {props.items.items.map((item) => (
          <CheckOutItems
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
}
