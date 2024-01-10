import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features";

export const store = configureStore({
  reducer: todoReducer,
});
