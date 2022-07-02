import React from "react";
import CheckOutList from "./CheckOutList";
import { useSelector } from "react-redux";
export default function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <CheckOutList items={cart} />
    </div>
  );
}
