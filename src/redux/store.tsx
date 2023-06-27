import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counterSlice"


// using configureStore from the redux toolkit library to create a new instance of the Redux store
export const store = configureStore({
  reducer: counterSlice.reducer,

});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
