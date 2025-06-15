import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  reload:false
};

const ReloadSlice = createSlice({
  name: "ReloadSlice",
  initialState,
  reducers: {
    setReload: (state,action) => {state.reload = action.payload
}
  },
});

export const { setReload } = ReloadSlice.actions;
export default ReloadSlice.reducer;