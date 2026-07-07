import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items"


const ItemSlice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
})
export default ItemSlice;
export const ItemActions = ItemSlice.actions;