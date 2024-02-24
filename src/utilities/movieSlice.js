import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trendingMovies: null,
        upcomingMovies: null,
      trailerVdo: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
          state.nowPlayingMovies = action.payload;
        },
        addpopularMovie: (state, action) => {
          state.popularMovies = action.payload;
        },
        addtrendingMovie: (state, action) => {
          state.trendingMovies = action.payload;
        },
        addupcomingMovie: (state, action) => {
          state.upcomingMovies = action.payload;
        },
        addTrailerVdo: (state, action) => {
        state.trailerVdo = action.payload;
        },
    },

});

export const {addNowPlayingMovie,addpopularMovie, addtrendingMovie, addupcomingMovie, addTrailerVdo} = movieSlice.actions;

export default movieSlice.reducer;