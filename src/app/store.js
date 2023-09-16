import { configureStore } from "@reduxjs/toolkit";
import foodReducer from '../globalStore/FoodManager/FoodManagerSlice'

export const store = configureStore({
  reducer: {
    foodManager: foodReducer,
  },
});

