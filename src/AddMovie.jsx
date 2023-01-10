import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const updatename = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" name="name" value={name} onChange={updatename} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
        {console.log(name)}
      </form>
    </div>
  );
}

export default AddMovie;
