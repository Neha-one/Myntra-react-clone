import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removefromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload)
    },

  }
});

export const bagSliceActions = bagSlice.actions;

export default bagSlice;