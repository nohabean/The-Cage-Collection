import './App.css';
import MovieCard from './components/MovieCard';
import movies_DATA from './movies.js';
import image from './assets/nc-bg.jpg';

function App() {
  const movies_JSON = JSON.parse(movies_DATA);
  console.log(movies_JSON);

  return (
    <div className="App">
      <div className="header">
        <img id="bg-img" src={image} alt="Nicolas Cage" />
        <h1>Movies From Our National Treasure</h1>
      </div>

      <div className="movie-list">
        <MovieCard movies={movies_JSON} />
      </div>
    </div>
  );
}

export default App;