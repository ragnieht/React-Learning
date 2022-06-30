import React, { useState, useEffect } from "react";
import MainItemsDisplay from "../components/Items/MainItemsDisplay";
import { useSelector } from "react-redux";
import SideNavBar from "../components/layout/SideNavBar";
import { useDispatch } from "react-redux";
// import {
//   addToDisplayType,
//   removeFromDisplayType,
//   addToDisplayFor,
//   removeFromDisplayFor,
// } from "../store/itemSlice";
import { filterDisplay } from "../store/itemSlice";

export default function MainShop() {
  const displayItems = useSelector((state) => state.items.display);
  const allItems = useSelector((state) => state.items.all);
  const checkBox = useSelector((state) => state.items.checkBox);
  const filter = useSelector((state) => state.items.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   checkBox.topsChecked
  //     ? dispatch(addToDisplayType("TOP"))
  //     : dispatch(removeFromDisplayType("TOP"));
  // }, [checkBox.topsChecked]);

  // useEffect(() => {
  //   checkBox.bottomsChecked
  //     ? dispatch(addToDisplayType("BOTTOM"))
  //     : dispatch(removeFromDisplayType("BOTTOM"));
  // }, [checkBox.bottomsChecked]);
  // useEffect(() => {
  //   checkBox.shoesChecked
  //     ? dispatch(addToDisplayType("SHOES"))
  //     : dispatch(removeFromDisplayType("SHOES"));
  // }, [checkBox.shoesChecked]);
  // useEffect(() => {
  //   checkBox.menChecked
  //     ? dispatch(addToDisplayFor("MEN"))
  //     : dispatch(removeFromDisplayFor("MEN"));
  // }, [checkBox.menChecked]);
  // useEffect(() => {
  //   checkBox.womenChecked
  //     ? dispatch(addToDisplayFor("WOMEN"))
  //     : dispatch(removeFromDisplayFor("WOMEN"));
  // }, [checkBox.womenChecked]);
  // useEffect(() => {
  //   checkBox.kidsChecked
  //     ? dispatch(addToDisplayFor("KIDS"))
  //     : dispatch(removeFromDisplayFor("KIDS"));
  // }, [checkBox.kidsChecked]);

  useEffect(() => {
    dispatch(filterDisplay());
  }, [checkBox]);
  console.log(displayItems);
  console.log(filter);
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
