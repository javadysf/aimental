import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventList: [{
    title: 'Meeting',
    start: new Date(2024, 9, 10, 10, 0), // August 4, 2024, 10:00 AM
    end: new Date(2024, 9, 10, 12, 0),   // August 4, 2024, 12:00 PM
  },
  {
    title: 'Lunch Break',
    start: new Date(2024, 7, 11, 13, 0), // August 5, 2024, 1:00 PM
    end: new Date(2024, 7, 11, 14, 0),   // August 5, 2024, 2:00 PM
  },]
};

const EventManagerSlice = createSlice({
  name: "EventManagerSlice",
  initialState,
  reducers: {
    setEventList: (state) => {state.eventList = [...state.eventList,{k:action.payload}]}
  },
});

export const { setEventList } = EventManagerSlice.actions;
export default EventManagerSlice.reducer;