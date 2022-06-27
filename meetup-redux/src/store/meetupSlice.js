import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeetupsAsync = createAsyncThunk(
  "meetups/getMeetupsAsync",
  async () => {
    const response = await fetch(
      "https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    );
    if (response.ok) {
      const meetups = await response.json();
      const fetchedMeetups = [];
      for (let key in meetups) {
        const fetchedMeetup = {
          id: key,
          ...meetups[key],
        };
        fetchedMeetups.push(fetchedMeetup);
      }

      return fetchedMeetups;
    }
  }
);

export const meetupSlice = createSlice({
  name: "meetups",
  initialState: [],
  reducers: {
    toggleFav: (state, action) => {
      const index = state.findIndex(
        (meetup) => meetup.id === action.payload.id
      );
      state[index].isFav = action.payload.isFav;
    },
  },
  extraReducers: {
    [getMeetupsAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { toggleFav, fetchMeetups } = meetupSlice.actions;

export default meetupSlice.reducer;
