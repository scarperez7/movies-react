import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieSearch from "./MovieSearch";
import MovieListHeading from "./MovieHeader";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(props.defaultMovie);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=39375142`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="movies container-fluid">
      <header className="m-2">
        <div className="row d-flex align-items-center">
          <MovieListHeading heading="Movies" />
          <MovieSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </header>
    </div>
  );
};

export default Movies;
