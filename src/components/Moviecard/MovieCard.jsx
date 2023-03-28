import { Link } from "react-router-dom";

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>
        
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;