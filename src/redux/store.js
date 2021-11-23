import { configureStore } from "@reduxjs/toolkit";
import shReducers from "./reducers/shReducers";

export default configureStore({
  reducer: { stonehive: shReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
