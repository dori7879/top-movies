import { MovieState } from './movie.reducer'
import {createFeatureSelector, createSelector, State} from "@ngrx/store";

export const getMovieState = createFeatureSelector<MovieState>('movies');

export const getMoviesLoaded = createSelector(
  getMovieState,
  (state: MovieState) => state.loaded
);

export const getMoviesError = createSelector(
  getMovieState,
  (state: MovieState) => state.error
);

export const getMovies  = createSelector(
  getMovieState,
  (state: MovieState) => state.movies
);
