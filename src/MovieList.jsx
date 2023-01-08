import React from "react";
import Movie from "./Movie";

function MovieList() {
  var movies = [
    {
      id: 1,
      name: "harry potter",
    },
    {
      id: 2,
      name: "1899",
    },
  ];
  return (
    <>
      {movies.map((movie) => (
        <Movie name={movie.name} id={movie.id} />
      ))}
    </>
  );
}

export default MovieList;
