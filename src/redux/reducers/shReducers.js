import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  sidebarItems: [],
};

const shSlice = createSlice({
  name: "stonehive",
  initialState,
  reducers: {
    setSidebarItems: (state, { payload }) => {
      state.sidebarItems = payload.items;
    },
  },
  extraReducers: {},
});

export const { setSidebarItems } = shSlice.actions;

export default shSlice.reducer;
