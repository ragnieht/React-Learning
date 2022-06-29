import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItemsAsync = createAsyncThunk(
  "apparels/getItemsAsync",
  async (url) => {
    const response = await fetch(url);

    if (response.ok) {
      const items = await response.json();
      const fetchedItems = [];
      for (let key in items) {
        const item = {
          id: key,
          ...items[key],
        };
        fetchedItems.push(item);
      }
      return fetchedItems;
    }
  }
);
const initialState = {
  all: [],
  checkBox: {
    topsChecked: false,
    bottomsChecked: false,
    shoesChecked: false,
    menChecked: false,
    womenChecked: false,
    kidsChecked: false,
  },
};
export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    toggleTopsBox: (state, action) => {
      state.checkBox.topsChecked = action.payload.topsChecked;
    },
    toggleBottomsBox: (state, action) => {
      state.checkBox.bottomsChecked = action.payload.bottomsChecked;
    },
    toggleShoesBox: (state, action) => {
      state.checkBox.shoesChecked = action.payload.shoesChecked;
    },
    toggleMenBox: (state, action) => {
      state.checkBox.menChecked = action.payload.menChecked;
    },
    toggleWomenBox: (state, action) => {
      state.checkBox.womenChecked = action.payload.womenChecked;
    },
    toggleKidsBox: (state, action) => {
      state.checkBox.kidsChecked = action.payload.kidsChecked;
    },
  },
  extraReducers: {
    [getItemsAsync.fulfilled]: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const {
  removeFromDisplayFor,
  addToDisplayFor,
  removeFromDisplayType,
  addToDisplayType,
  toggleTopsBox,
  toggleBottomsBox,
  toggleShoesBox,
  toggleMenBox,
  toggleWomenBox,
  toggleKidsBox,
} = itemSlice.actions;

export default itemSlice.reducer;
