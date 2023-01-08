import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map((movie) => (
        <Movie name={movie.name} key={movie.id} />
      ))}
    </>
  );
}

export default MovieList;
