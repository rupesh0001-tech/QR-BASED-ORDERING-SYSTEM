import { createSlice } from "@reduxjs/toolkit";

const initState = {
  Menu: [],
};

export const menuSlice = createSlice({
  name: "Menu",
  initialState: initState,
  reducers: {
    AddMenu: (state, action) => {
      state.Menu = action.payload
    },
  },
});


export const { AddMenu } = menuSlice.actions
export default menuSlice.reducer
