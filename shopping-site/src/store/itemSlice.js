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
  display: [],
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
    addToDisplayType: (state, action) => {
      // let temp = state.all.filter((item) => item.type === action.payload.type);
      // state.display = [...state.display, ...temp];
      let filtered = state.all.filter(
        (item) => item.type === action.payload.type
      );
      let temp = [...state.display, ...filtered];
      state.display = Array.from(new Set(temp.map(JSON.stringify))).map(
        JSON.parse
      );
    },
    removeFromDisplayType: (state, action) => {
      // let temp = [...state.display];
      // temp = temp.filter((item) => item.type !== action.payload.type);
      // state.display = temp;
      let filtered = state.display.filter(
        (item) => item.type !== action.payload.type
      );
      let temp = [...filtered];
      state.display = temp;
    },
    addToDisplayFor: (state, action) => {
      // let temp = state.display.filter(
      //   (item) => item.for === action.payload.for
      // );
      // state.display = [...state.display, ...temp];
      let filtered = state.all.filter(
        (item) => item.for === action.payload.for
      );
      let temp = [...state.display, ...filtered];
      state.display = Array.from(new Set(temp.map(JSON.stringify))).map(
        JSON.parse
      );
    },
    removeFromDisplayFor: (state, action) => {
      // let temp = [...state.display];
      // temp = temp.filter((item) => item.for !== action.payload.for);
      // state.display = temp;
      let filtered = state.display.filter(
        (item) => item.for !== action.payload.for
      );
      let temp = [...filtered];
      state.display = temp;
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
