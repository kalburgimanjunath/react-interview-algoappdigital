import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Details({ movies }) {
  const { id } = useParams();
  const filteredData =
    movies &&
    movies.map((item) => {
      console.log(item.id);
    });

  // const movies = useSelector((state) => state.movie);
  return <div>Details:{id}</div>;
}
