import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItemsAsync = createAsyncThunk(
  "apparels/getItemsAsync",
  async () => {
    const response = await fetch(
      "https://apparel-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/apparels.json"
    );
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

export const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    sortItems: (state, action) => {},
  },
  extraReducers: {
    [getItemsAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { sortItems } = itemSlice.actions;

export default itemSlice.reducer;
