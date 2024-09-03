import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './reducers/signupSlice';
import movieReducer from './reducers/movieSlice';

const store = configureStore({
  reducer: {
    signup: signupReducer,
    movie: movieReducer
  }
});

export default store;
