import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  sidebarItems: {
    active: undefined,
    items: [],
  },
};

const shSlice = createSlice({
  name: "stonehive",
  initialState,
  reducers: {
    setSidebarItems: (state, { payload }) => {
      state.sidebarItems.active = payload.active;
      state.sidebarItems.items = payload.items;
    },
  },
  extraReducers: {},
});

export const { setSidebarItems } = shSlice.actions;

export default shSlice.reducer;
