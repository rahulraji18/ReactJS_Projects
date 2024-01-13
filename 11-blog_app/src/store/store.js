import { configureStore } from "@reduxjs/toolkit";
import AuthReduce from "./authSlice";

const store = configureStore({
  reducer: {
    auth: AuthReduce,
  },
});

export default store;
