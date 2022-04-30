import React from "react";

const MovieList = (props) => {
  const Favs = props.favoriteComponent;

  return (
    <div className="movie-list d-flex  ">
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="image-container text-center m-3">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="title">{movie.Title}</div>
            <div
              onClick={() => props.handleFavoriteClick(movie)}
              className="overlay d-flex justify-content-center "
            >
              <Favs />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
