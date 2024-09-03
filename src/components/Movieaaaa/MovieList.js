import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from '../../utils/api';

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(category);
      setMovies(movies);
    };

    getMovies();
  }, [category]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
