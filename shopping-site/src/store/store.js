import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
  },
});

export default store;
