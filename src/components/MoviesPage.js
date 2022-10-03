import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  
  return (
    <div>
      <MoviesList movies={movies} />
      <Route>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route exact path={`${match.url}/:movieId`}>
        <MoviesShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;