import React, { useState, useEffect } from 'react';
import './style.css';
import Home, { useState, useEffect } from './pages/Home';
import Details from './pages/Details';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   fetch(
  //     'https://api.themoviedb.org/3/movie/upcoming?api_key=f50ad22f53d646b27b4d58e0ab474f3b&language=en-US&page=1'
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // console.log(result);
  //       setMovies(result.results.json());
  //     });
  // });

  const [movies, setMovies] = useState();
  const loadMovies = async () => {
    await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=f50ad22f53d646b27b4d58e0ab474f3b&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.results);
        setMovies(result.results);
      });
  };
  useEffect(() => {
    loadMovies();
  }, [movies]);

  return (
    <div>
      <Routes>
        <Route
          path="/details/:id"
          element={<Details movies={movies} />}
        ></Route>
        <Route path="/" element={<Home movies={movies} />}></Route>
      </Routes>
    </div>
  );
}
