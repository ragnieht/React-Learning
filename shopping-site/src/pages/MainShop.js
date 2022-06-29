import React, { useState, useEffect } from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import SideNavBar from "../components/layout/SideNavBar";
import { useDispatch } from "react-redux";

export default function MainShop() {
  const displayItems = [];
  const allItems = useSelector((state) => state.items.all);
  const checkBox = useSelector((state) => state.items.checkBox);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(allItems);
    console.log(checkBox);
  }, [dispatch]);

  return (
    <div>
      <SideNavBar />
      <MainItemsDisplay items={allItems} />
    </div>
  );
}

// if (
//   !checkTops &&
//   !checkBottoms &&
//   !checkShoes &&
//   !checkMen &&
//   !checkWomen &&
//   !checkKids
// ) {
//   displayItems = allItems;
// }

// const [displayItem, setDisplayItem] = useState(
//   useSelector((state) => state.items.all)
// );
// const [curChecked, setCurChecked] = useState([]);

// displayItem.filter((item) => {
//   for (let type of test) {
//     return item.type === type;
//   }
//   return false;
// });
// function updateDisplayItem() {
//   let temp;
//   temp = displayItem.filter((item) => {
//     for (let type of curChecked) {
//       return item.type === type;
//     }
//     return false;
//   });

//   console.log(curChecked, displayItem);
// }
// function topHandler(checkboxName, checked) {
//   if (checked) {
//     let temp = [...curChecked];
//     temp.push(checkboxName);
//     setCurChecked(temp);
//   } else {
//     let temp = [...curChecked];
//     temp = temp.filter((type) => type !== checkboxName);
//     setCurChecked(temp);
//   }
// }

// useEffect(() => {
//   updateDisplayItem();
// });
