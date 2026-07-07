import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./item";
import fetchStatusSlice from "./FetchingSlice";


const myntraStore = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer
  }
});
export default myntraStore;