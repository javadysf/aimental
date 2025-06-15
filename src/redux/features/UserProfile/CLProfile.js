import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  profile: null,
  avatar:""
};

const CLProfileSlice = createSlice({
  name: "CLProfileSlice",
  initialState,
  reducers: {
    setCLProfile: (state,action) => {state.profile = action.payload
},
setCLAvatar: (state,action) => {state.avatar = action.payload
}
  },
});

export const { setCLProfile,setCLAvatar } = CLProfileSlice.actions;
export default CLProfileSlice.reducer;