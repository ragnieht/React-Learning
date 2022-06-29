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
      setTopsToggle(!topsToggle);
      dispatch(toggleTopsBox({ topsChecked: !topsToggle }));
    } else {
      setTopsToggle(!topsToggle);
      dispatch(toggleTopsBox({ topsChecked: !topsToggle }));
    }
  }
  function toggleBottoms() {
    if (!bottomsToggle) {
      setBottomsToggle(!bottomsToggle);
      dispatch(toggleBottomsBox({ bottomsChecked: !bottomsToggle }));
    } else {
      setBottomsToggle(!bottomsToggle);
      dispatch(toggleBottomsBox({ bottomsChecked: !bottomsToggle }));
    }
  }
  function toggleShoes() {
    if (!shoesToggle) {
      setShoesToggle(!shoesToggle);
      dispatch(toggleShoesBox({ shoesChecked: !shoesToggle }));
    } else {
      setShoesToggle(!shoesToggle);
      dispatch(toggleShoesBox({ shoesChecked: !shoesToggle }));
    }
  }
  function toggleMen() {
    if (!menToggle) {
      setMenToggle(!menToggle);
      dispatch(toggleMenBox({ menChecked: !menToggle }));
    } else {
      setMenToggle(!menToggle);
      dispatch(toggleMenBox({ menChecked: !menToggle }));
    }
  }
  function toggleWomen() {
    if (!womenToggle) {
      setWomenToggle(!womenToggle);
      dispatch(toggleWomenBox({ womenChecked: !womenToggle }));
    } else {
      setWomenToggle(!womenToggle);
      dispatch(toggleWomenBox({ womenChecked: !womenToggle }));
    }
  }
  function toggleKids() {
    if (!kidsToggle) {
      setKidsToggle(!kidsToggle);
      dispatch(toggleKidsBox({ kidsChecked: !kidsToggle }));
    } else {
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
