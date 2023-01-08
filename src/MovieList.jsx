import React from "react";
import Movie from "./Movie";

function MovieList() {
  return (
    <>
      {movies.map((movie) => (
        <Movie name={movie.name} id={movie.id} />
      ))}
    </>
  );
}

export default MovieList;
