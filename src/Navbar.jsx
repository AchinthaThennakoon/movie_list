import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Navbar() {
  const [movies, setMovies] = useContext(MovieContext);
  return <div>Navbar</div>;
}

export default Navbar;
