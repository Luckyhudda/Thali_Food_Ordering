import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thaliList: [],
};

export const FoodManagerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToThali: (state,action) => {
      const existingItem = state.thaliList.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.thaliList.push(action.payload);
      }
    },
    decreseFromThali: (state,action) => {
      const existingItem = state.thaliList.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity -= 1;
      } 
    },
    removeFromThali: (state,action) => {
      state.thaliList.pop(action.payload);
    },
   
  },
});

export const { addToThali, removeFromThali, decreseFromThali } =
  FoodManagerSlice.actions;

export default FoodManagerSlice.reducer;
