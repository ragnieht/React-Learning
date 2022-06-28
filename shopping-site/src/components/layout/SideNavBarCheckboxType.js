import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTopsBox,
  toggleBottomsBox,
  toggleShoesBox,
  toggleMenBox,
  toggleWomenBox,
  toggleKidsBox,
  addToDisplayType,
  removeFromDisplayType,
  addToDisplayFor,
  removeFromDisplayFor,
} from "../../store/itemSlice";

export default function SideNavBarCheckboxType(props) {
  // const history = useHistory();
  // function checkCurPath(type) {
  //   return history.location.pathname.split("-").some((path) => path === type);
  // }
  const dispatch = useDispatch();
  const [topsToggle, setTopsToggle] = useState(false);
  const [bottomsToggle, setBottomsToggle] = useState(false);
  const [shoesToggle, setShoesToggle] = useState(false);
  const [menToggle, setMenToggle] = useState(false);
  const [womenToggle, setWomenToggle] = useState(false);
  const [kidsToggle, setKidsToggle] = useState(false);

  function toggleTops() {
    if (!topsToggle) {
      dispatch(addToDisplayType({ type: "TOP" }));
      setTopsToggle(!topsToggle);
      dispatch(toggleTopsBox({ topsChecked: !topsToggle }));
    } else {
      dispatch(removeFromDisplayType({ type: "TOP" }));
      setTopsToggle(!topsToggle);
      dispatch(toggleTopsBox({ topsChecked: !topsToggle }));
    }
  }
  function toggleBottoms() {
    if (!bottomsToggle) {
      dispatch(addToDisplayType({ type: "BOTTOM" }));
      setBottomsToggle(!bottomsToggle);
      dispatch(toggleBottomsBox({ bottomsChecked: !bottomsToggle }));
    } else {
      dispatch(removeFromDisplayType({ type: "BOTTOM" }));
      setBottomsToggle(!bottomsToggle);
      dispatch(toggleBottomsBox({ bottomsChecked: !bottomsToggle }));
    }
  }
  function toggleShoes() {
    if (!shoesToggle) {
      dispatch(addToDisplayType({ type: "SHOES" }));
      setShoesToggle(!shoesToggle);
      dispatch(toggleShoesBox({ shoesChecked: !shoesToggle }));
    } else {
      dispatch(removeFromDisplayType({ type: "SHOES" }));
      setShoesToggle(!shoesToggle);
      dispatch(toggleShoesBox({ shoesChecked: !shoesToggle }));
    }
  }
  function toggleMen() {
    if (!menToggle) {
      dispatch(addToDisplayFor({ for: "MEN" }));
      setMenToggle(!menToggle);
      dispatch(toggleMenBox({ menChecked: !menToggle }));
    } else {
      dispatch(removeFromDisplayFor({ for: "MEN" }));
      setMenToggle(!menToggle);
      dispatch(toggleMenBox({ menChecked: !menToggle }));
    }
  }
  function toggleWomen() {
    if (!womenToggle) {
      dispatch(addToDisplayFor({ for: "WOMEN" }));
      setWomenToggle(!womenToggle);
      dispatch(toggleWomenBox({ womenChecked: !womenToggle }));
    } else {
      dispatch(removeFromDisplayFor({ for: "WOMEN" }));
      setWomenToggle(!womenToggle);
      dispatch(toggleWomenBox({ womenChecked: !womenToggle }));
    }
  }
  function toggleKids() {
    if (!kidsToggle) {
      dispatch(addToDisplayFor({ for: "KIDS" }));
      setKidsToggle(!kidsToggle);
      dispatch(toggleKidsBox({ kidsChecked: !kidsToggle }));
    } else {
      dispatch(removeFromDisplayFor({ for: "KIDS" }));
      setKidsToggle(!kidsToggle);
      dispatch(toggleKidsBox({ kidsChecked: !kidsToggle }));
    }
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={toggleTops} />}
        label="Tops"
      />
      <FormControlLabel
        control={<Checkbox onChange={toggleBottoms} />}
        label="Bottoms"
      />
      <FormControlLabel
        control={<Checkbox onChange={toggleShoes} />}
        label="Shoes"
      />
      <FormControlLabel
        control={<Checkbox onChange={toggleMen} />}
        label="Men"
      />
      <FormControlLabel
        control={<Checkbox onChange={toggleWomen} />}
        label="Women"
      />
      <FormControlLabel
        control={<Checkbox onChange={toggleKids} />}
        label="Kids"
      />
    </FormGroup>
  );
}
// checked={topsChecked}
//             onChange={() => {
//               props.topHandler("TOP", !topsChecked);
//               setTopsChecked(!topsChecked);
//             }}
