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
    toggleTopsBox: (state, action) => {
      state.topsChecked = action.payload.topsChecked;
    },
    toggleBottomsBox: (state, action) => {
      state.bottomsChecked = action.payload.bottomsChecked;
    },
    toggleShoesBox: (state, action) => {
      state.shoesChecked = action.payload.shoesChecked;
    },
    toggleMenBox: (state, action) => {
      state.menChecked = action.payload.menChecked;
    },
    toggleWomenBox: (state, action) => {
      state.womenChecked = action.payload.womenChecked;
    },
    toggleKidsBox: (state, action) => {
      state.kidsChecked = action.payload.kidsChecked;
    },
  },
});

export const {
  toggleTopsBox,
  toggleBottomsBox,
  toggleShoesBox,
  toggleMenBox,
  toggleWomenBox,
  toggleKidsBox,
} = checkboxSlice.actions;
export default checkboxSlice.reducer;
