import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    email: "de@gmail.com",
  },
  reducers: {
    increment(state, action) {
      state.count++;
      state.email = "akash@gmail.com";
    },
    decrement(state, action) {
      state.count--;
      state.email = "de@gmail.com";
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
