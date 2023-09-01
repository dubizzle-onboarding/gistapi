import { configureStore } from "@reduxjs/toolkit";
import gistReducer from "./slices/gistSlice";

export const store = configureStore({
  reducer: {
    gist: gistReducer,
  },
});
