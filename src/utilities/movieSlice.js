import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name: "movies",
    initialState: {
        nowPlayingMovies: null,
      trailerVdo: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
          state.nowPlayingMovies = action.payload;
        },
        addTrailerVdo: (state, action) => {
        state.trailerVdo = action.payload;
        },
    },

});

export const {addNowPlayingMovie, addTrailerVdo} = movieSlice.actions;

export default movieSlice.reducer;