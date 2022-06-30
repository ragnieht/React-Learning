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
  filter: {
    type: [],
    for: [],
  },
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
    filterDisplay: (state, action) => {
      state.display = [];
      let before = [];
      state.filter.type.forEach((e) => {
        state.all
          .filter((item) => item.type === e)
          .map((item) => state.display.push(item));
      });
      state.filter.for.forEach((e) => {
        state.all
          .filter((item) => item.for === e)
          .map((item) => state.display.push(item));
      });

      const unique = new Set();
      const temp = state.display.filter((item) => {
        const duplicate = unique.has(item.id);
        unique.add(item.id);
        return !duplicate;
      });

      state.display = temp;
    },
    addFilter: (state, action) => {
      if (action.payload.type) state.filter.type.push(action.payload.type);
      if (action.payload.for) state.filter.for.push(action.payload.for);
    },
    removeFilter: (state, action) => {
      if (action.payload.type)
        state.filter.type.splice(
          state.filter.type.findIndex((e) => e === action.payload.type),
          1
        );
      if (action.payload.for)
        state.filter.for.splice(
          state.filter.for.findIndex((e) => e === action.payload.for),
          1
        );
    },
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

    // addToDisplayType: (state, action) => {
    //   state.all
    //     .filter((item) => item.type === action.payload)
    //     .map((item) => state.display.push(item));
    //   const unique = new Set();
    //   const temp = state.display
    //     .filter((item) => {
    //       const duplicate = unique.has(item.id);
    //       unique.add(item.id);
    //       return !duplicate;
    //     })
    //     .filter((item) => item.type === action.payload);
    //   state.display = temp;
    // },
    // removeFromDisplayType: (state, action) => {
    //   state.display = state.display.filter(
    //     (item) => item.type !== action.payload
    //   );
    //   const unique = new Set();
    //   const temp = state.display.filter((item) => {
    //     const duplicate = unique.has(item.id);
    //     unique.add(item.id);
    //     return !duplicate;
    //   });
    //   state.display = temp;
    // },
    // addToDisplayFor: (state, action) => {
    //   state.all
    //     .filter((item) => item.for === action.payload)
    //     .map((item) => state.display.push(item));
    //   const unique = new Set();
    //   const temp = state.display
    //     .filter((item) => {
    //       const duplicate = unique.has(item.id);
    //       unique.add(item.id);
    //       return !duplicate;
    //     })
    //     .filter((item) => item.for === action.payload);
    //   state.display = temp;
    // },
    // removeFromDisplayFor: (state, action) => {
    //   state.display = state.display.filter(
    //     (item) => item.for !== action.payload
    //   );
    //   const unique = new Set();
    //   const temp = state.display.filter((item) => {
    //     const duplicate = unique.has(item.id);
    //     unique.add(item.id);
    //     return !duplicate;
    //   });
    //   state.display = temp;
    // },
  },
  extraReducers: {
    [getItemsAsync.fulfilled]: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const {
  addFilter,
  removeFilter,
  filterDisplay,
  toggleTopsBox,
  toggleBottomsBox,
  toggleShoesBox,
  toggleMenBox,
  toggleWomenBox,
  toggleKidsBox,
} = itemSlice.actions;

export default itemSlice.reducer;
