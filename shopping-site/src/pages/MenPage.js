import React from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";

export default function MenPage() {
  const displayItems = useSelector((state) =>
    state.items.all.filter((item) => item.for === "MEN")
  );
  return (
    <div style={{ marginLeft: "-18rem" }}>
      <MainItemsDisplay items={displayItems} />
    </div>
  );
}
