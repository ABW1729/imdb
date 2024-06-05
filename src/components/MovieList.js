import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieList.css'
function MovieList() {
  const [movies, setMovies] = useState([]);
  


  

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return(
<>
  <div className="container">
    <div className='title' >
      <h2>Movies List</h2>
    </div>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  </div>
</>
  );
}

export default MovieList;
