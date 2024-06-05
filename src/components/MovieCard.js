import {React,useState,useEffect,useRef} from 'react';
import "./MovieCard.css"
import MovieDetail from './MovieDetail';
function MovieCard({ movie }) {
  const dialogRef = useRef();

  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
   
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current &&!dialogRef.current.contains(event.target)) {
        setIsDialogOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Function to toggle dialog visibility
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  // Function to select a movie
  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    console.log(movie);
    toggleDialog();
  };
  return (
    <>
    <div className="movie-card" key={movie._id}>
    <img src={movie.image} alt={movie.title} style={{ height: '200px', width: '300px' }}/>
    <h2>{movie.title}</h2>
    <p>{movie.shortDescription}</p>
    <button className="read-more-button" onClick={() => selectMovie(movie)}>Read More</button>
  </div>
  <div>
  {isDialogOpen && (
      <div className="dialog-container">
        <div className="movie-detail" ref={dialogRef}>
          <button className="close-button" onClick={toggleDialog}>&times;</button>
          <MovieDetail Movie={selectedMovie}/>
          
        </div>
      </div>
    )}
    </div>
  </>
  );
}

export default MovieCard;
