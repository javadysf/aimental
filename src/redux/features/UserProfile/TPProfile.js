import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  profile: null,
  avatar:""
};

const TPProfileSlice = createSlice({
  name: "TPProfileSlice",
  initialState,
  reducers: {
    setTPProfile: (state,action) => {state.profile = action.payload
},
setTPAvatar: (state,action) => {state.avatar = action.payload
}
  },
});

export const { setTPProfile,setTPAvatar } = TPProfileSlice.actions;
export default TPProfileSlice.reducer;