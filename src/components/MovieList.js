import React from "react";

const MovieList = (props) => {
  return (
    <div className="movie-list d-flex  ">
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="image-container text-center m-3">
            <img src={movie.Poster} alt={movie.Title} />
            <small>{movie.Title}</small>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
