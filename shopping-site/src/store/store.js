import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import checkboxReducer from "./checkboxSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
    checkbox: checkboxReducer,
  },
});

export default store;
