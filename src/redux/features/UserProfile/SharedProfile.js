import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  profile: {},
};

const SharedProfileSlice = createSlice({
  name: "SharedProfileSlice",
  initialState,
  reducers: {
    setSharedProfile: (state,action) => {

      state.profile = action.payload
}
  },
});

export const { setSharedProfile } = SharedProfileSlice.actions;
export default SharedProfileSlice.reducer;