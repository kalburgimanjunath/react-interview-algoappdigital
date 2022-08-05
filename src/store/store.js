import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './reducers/movieSlice';
export const store = configureStore({
  reducer: { movie: MovieReducer },
});
