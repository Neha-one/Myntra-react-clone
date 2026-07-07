import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./item";
import fetchStatusSlice from "./FetchingSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});
export default myntraStore;