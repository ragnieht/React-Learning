import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTops } from "../../store/checkboxSlice";

export default function SideNavBarCheckboxType() {
  // const history = useHistory();
  // function checkCurPath(type) {
  //   return history.location.pathname.split("-").some((path) => path === type);
  // }
  const [topsChecked, setTopsChecked] = useState(false);
  const [bottomsChecked, setBottomsChecked] = useState(false);

  const dispatch = useDispatch();
  const test = useSelector((state) => state.checkbox);

  function toggleTops(e) {
    setTopsChecked(e.target.checked);
    dispatch(toggleTops({ topsChecked: !topsChecked }));
    console.log(test);
  }
  function toggleBottoms(e) {
    setBottomsChecked(e.target.checked);

    console.log(test);
  }
  function toggleShoes() {}
  function toggleMen() {}
  function toggleWomen() {}
  function toggleKids() {}

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={topsChecked} onChange={toggleTops} />}
        label="Tops"
      />
      <FormControlLabel
        control={<Checkbox checked={bottomsChecked} onChange={toggleBottoms} />}
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
