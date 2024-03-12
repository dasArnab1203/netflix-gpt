import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    addGptMovie: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearch, addGptMovie } = searchSlice.actions;
export default searchSlice.reducer;
