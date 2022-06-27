import { configureStore } from "@reduxjs/toolkit";
import meetupReducer from "./meetupSlice";

const store = configureStore({
  reducer: {
    meetups: meetupReducer,
  },
});

export default store;
