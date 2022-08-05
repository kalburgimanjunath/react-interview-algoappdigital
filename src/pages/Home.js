import React, { useState, useEffect } from 'react';
import List from '../components/List';
export default function Home({ movies }) {
  return <div>{movies ? <List movies={movies} /> : <div>Loading...</div>}</div>;
}
