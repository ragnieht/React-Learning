import React from "react";
import BillingItem from "./BillingItem";
import classes from "./BillingItemList.module.css";

export default function BillingItemList(props) {
  const deliveryFee = "$5";
  function getTotal() {
    let output;
    const temp =
      parseFloat(deliveryFee.replace("$", "")) +
      parseFloat(props.items.total.replace("$", ""));
    output = "$" + temp;
    return output;
  }

  return (
    <div className={classes.container}>
      <div>
        <h2>Summary</h2>
      </div>
      <div>
        {props.items.items.map((item) => (
          <BillingItem key={item.id} title={item.title} price={item.price} />
        ))}
      </div>
      <div>
        <div className={classes.subtotal}>
          <p>Subtotal</p>
          <p className={classes.price}>{props.items.total}</p>
        </div>
        <div className={classes.delivery}>
          <p>Delivery & Handling</p>
          <p className={classes.price}>{deliveryFee}</p>
        </div>
        <span>
          ---------------------------------------------------------------------------------
        </span>
        <div className={classes.total}>
          <h3>Total</h3>
          <p className={classes.price}>{getTotal()}</p>
        </div>
      </div>
    </div>
  );
}
