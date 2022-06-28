import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";

export default function WomenPage() {
  const items = useSelector((state) => state.items);
  const displayItems = items.filter((item) => item.for === "WOMEN");

  return (
    <div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
