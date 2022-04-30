import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieSearch from "./MovieSearch";
import MovieListHeading from "./MovieHeader";
import MovieList from "./MovieList";
import addFavorite from "./AddFavorite";
import removeFavorites from "./RemoveFavorites";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(props.defaultMovie);
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=39375142`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  const addMovieFav = (movie) => {
    const newFavList = [...favorites, movie];
    setFavorites(newFavList);
  };

  const removeMovieFavs = (movie) => {
    const newFavList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavList);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="movies container-fluid">
      <header className="m-2">
        <div className="row d-flex  align-items-center">
          <MovieListHeading heading="Movies" />
          <MovieSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </header>
      <div className="row">
        <MovieList
          movies={movies}
          favoriteComponent={addFavorite}
          handleFavoriteClick={addMovieFav}
        />
      </div>
      <div className=" row d-flex align-items-center mt-4 ">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          favoriteComponent={removeFavorites}
          handleFavoriteClick={removeMovieFavs}
        />
      </div>
    </div>
  );
};

export default Movies;
