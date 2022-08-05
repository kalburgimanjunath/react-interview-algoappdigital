import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  likes: 0,
  movies: [],
  loading: false,
};
// const fetchedUser = () => {
//   fetch(
//     'https://api.themoviedb.org/3/movie/upcoming?api_key=f50ad22f53d646b27b4d58e0ab474f3b&language=en-US&page=1'
//   )
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       setMovies(result.results.json());
//     });
// };

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.likes += 1;
    },
    decrement: (state) => {
      state.likes -= 1;
    },
    incrementByAmount: (state, action) => {
      state.likes += action.payload;
    },
    loadData: (newstate) => {
      state.concat(newstate);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = movieSlice.actions;

export default movieSlice.reducer;
