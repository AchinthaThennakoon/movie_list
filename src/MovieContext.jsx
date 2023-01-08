import React, { useState, createContext } from "react";

//create context
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "harry potter",
    },
    {
      id: 2,
      name: "1899",
    },
  ]);
  return (
    //add componet which need movie context
    <MovieContext.Provider>
      {/* <Navbar />
      <MovieList /> */}
      {props.children}
    </MovieContext.Provider>
  );
};
