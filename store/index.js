import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    counterstate: counterSlice.reducer,
  },
});

export default store;
