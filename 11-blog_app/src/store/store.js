import { configureStore } from "@reduxjs/toolkit";
import AuthReduce from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReduce,
  },
});
