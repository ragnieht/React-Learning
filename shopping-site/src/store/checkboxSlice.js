import { fabClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topsChecked: false,
  bottomsChecked: false,
  shoesChecked: false,
  menChecked: false,
  womenChecked: false,
  kidsChecked: false,
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggleTops: (state, action) => {
      state.topsChecked = action.payload.topsChecked;
    },
    toggleBottoms: (state, action) => {
      state.bottomsChecked = action.payload.bottomsChecked;
    },
  },
});

export const { toggleTops, toggleBottoms } = checkboxSlice.actions;
export default checkboxSlice.reducer;
