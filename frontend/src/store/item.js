import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items"


const ItemSlice = createSlice({
  name: 'item',
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (state) => {
      return state;
    }
  }
})
export default ItemSlice;
export const ItemActions = ItemSlice.actions;