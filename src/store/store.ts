import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;

