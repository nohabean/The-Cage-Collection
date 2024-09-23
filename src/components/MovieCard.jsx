import React from 'react';
import Movie from './Movie';

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-card-container"> {/* Outer container */}
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>  {/* Each movie has its own card */}
          <Movie
            image={movie.image}
            name={movie.name}
            runtime={movie.runtime}
            genre={movie.genre}
            release_date={movie.release_date}
            description={movie.description}
            imdb={movie.imdb}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;