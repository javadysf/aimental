import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tickets: [],
};

const TicketsSlice = createSlice({
  name: "TicketsSlice",
  initialState,
  reducers: {
    setTickets: (state,action) => {state.tickets = action.payload
}
  },
});

export const { setTickets } = TicketsSlice.actions;
export default TicketsSlice.reducer;