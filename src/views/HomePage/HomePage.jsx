import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/ApiService';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) {
      return;
    }
    fetchTrendingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error.message));
  }, [movies]);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
