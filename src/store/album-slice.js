import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "album",
  initialState: { albums: ["London"] },
  reducers: {
    // map of methods that represent the different actions we want to handle
    getAlbums(state) {
      state.albums = ["Berlin", "Chicago", "Dublin"];
    },
  },
});

export const albumActions = albumSlice.actions;

export default albumSlice;
