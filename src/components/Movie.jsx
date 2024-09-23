import React, { useState } from 'react';

const Movie = ({ image, name, runtime, genre, release_date, description, imdb }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 50;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="movie">
      <img className="movie-image" src={image} alt={name} />
      <div className="movie-details">
        <h3>{name}</h3>
        <div className="movie-data">
          <div className="time-genres">
            <p>⌛ {runtime}</p>
            <p>🎬 {genre}</p>
          </div>
          <p>📅 {release_date}</p>
          <p className="movie-description">
            {isExpanded ? description : `${description.slice(0, maxDescriptionLength)}...`}
          </p>
        </div>
        <a href={imdb} target="_blank"><button className="link-button">See More</button></a>
      </div>
    </div>
  );
};

export default Movie;