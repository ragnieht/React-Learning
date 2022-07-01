import React from "react";
import { useSelector } from "react-redux";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";

export default function KidsPage() {
  const displayItems = useSelector((state) =>
    state.items.all.filter((item) => item.for === "KIDS")
  );
  return (
    <div style={{ marginLeft: "-18rem" }}>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
