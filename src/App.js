import "./App.css";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
