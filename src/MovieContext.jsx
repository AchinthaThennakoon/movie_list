import React, { useState , createContext} from 'react'

//create context
export const MovieContext = createContext();

export const MovieProvider = () =>{
  const [movies,setMovies] = useState([
    {
      id: 1,
      name: "harry potter",
    },
    {
      id: 2,
      name: "1899",
    },
  ]);
  return();
}