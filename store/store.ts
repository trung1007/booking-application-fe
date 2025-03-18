"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/theme.slice";

const rootReducer = combineReducers({
    theme:themeReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
