import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    user: null,
  },
  reducers: {
    singIn: (state, action) => {
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logOut, singIn } = firebaseSlice.actions;

export default firebaseSlice;
