import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Inception', id: 1 },
    { title: 'Interstellar', id: 2 },
    { title: 'The Matrix', id: 3 },
  ]);

  const deleteItems = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMovies);
  };

  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <button onClick={() => deleteItems(movie.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
