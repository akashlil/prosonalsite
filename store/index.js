import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import firebaseSlice from "./firebaseSlice";
const store = configureStore({
  reducer: {
    counterstate: counterSlice.reducer,
    firebaseState: firebaseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
