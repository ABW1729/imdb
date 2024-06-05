import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./MovieDetail.css"
function MovieDetail(Movie) {
  console.log(Movie)
  const id  = Movie.Movie._id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movie details!', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.longDescription}</p>
    </div>
  );
}

export default MovieDetail;
