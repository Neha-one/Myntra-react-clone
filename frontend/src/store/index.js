import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./item";


const myntraStore = configureStore({
  reducer: {
    item: ItemSlice.reducer
  }
});
export default myntraStore;