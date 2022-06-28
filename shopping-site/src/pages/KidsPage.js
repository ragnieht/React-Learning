import React from "react";
import { useSelector } from "react-redux";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";

export default function KidsPage() {
  const items = useSelector((state) => state.items);
  const displayItems = items.filter((item) => item.for === "KIDS");

  return (
    <div>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
