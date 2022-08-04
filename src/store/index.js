import { configureStore } from "@reduxjs/toolkit";

import albumSlice from "./album-slice";

const store = configureStore({
  reducer: { album: albumSlice.reducer },
});

export default store;
