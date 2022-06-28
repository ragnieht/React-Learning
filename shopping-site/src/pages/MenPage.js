import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";

export default function MenPage() {
  const items = useSelector((state) => state.items);
  const displayItems = items.filter((item) => item.for === "MEN");

  return (
    <div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
