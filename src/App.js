import "./App.css";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <MovieList />
        <AddMovie/>
      </div>
    </MovieProvider>
  );
}

export default App;
