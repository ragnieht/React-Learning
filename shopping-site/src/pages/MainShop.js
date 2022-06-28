import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";

export default function MainShop() {
  const items = useSelector((state) => state.items);
  const displayItems = items;
  // console.log(useSelector((state) => state));
  return (
    <div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
