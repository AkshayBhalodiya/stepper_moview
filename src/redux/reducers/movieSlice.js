import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlaying: [],
  topRated: [],
  popular: [],
  upcoming: [],
  movieDetails: {}
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state[action.payload.category] = action.payload.movies;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    }
  }
});

export const { setMovies, setMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
