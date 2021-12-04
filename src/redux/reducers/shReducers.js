import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  sidebarItems: {
    active: undefined,
    items: [],
  },
  topBarVisible: true,
};

const shSlice = createSlice({
  name: "stonehive",
  initialState,
  reducers: {
    setSidebarItems: (state, { payload }) => {
      state.sidebarItems.active = payload.active;
      state.sidebarItems.items = payload.items;
    },

    setTopBarVisibility: (state, { payload }) => {
      state.topBarVisible = payload.visibility;
    },
  },
  extraReducers: {},
});

export const { setSidebarItems, setTopBarVisibility } = shSlice.actions;

export default shSlice.reducer;
