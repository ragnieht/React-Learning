import React, { useState, useEffect } from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToDisplay } from "../store/itemSlice";
import SideNavBar from "../components/layout/SideNavBar";

export default function MainShop() {
  const [displayItems, setDisplayItems] = useState(
    useSelector((state) => state.items.all)
  );
  const displayed = useSelector((state) => state.items.display);
  const dispatch = useDispatch();

  const checked = useSelector((state) => state.items.checkBox);
  useEffect(() => {
    setDisplayItems(displayed);
    console.log(displayItems);
    console.log(checked);
  }, [, checked]);

  return (
    <div>
      <SideNavBar />
      <MainItemsDisplay items={displayItems} />
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
