import { MovieState } from './movie.reducer'
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const getMovieState = createFeatureSelector<MovieState>('movies');

export const getIsLoaded = createSelector(
  getMovieState,
  (state: MovieState) => state.loaded
);

export const getError = createSelector(
  getMovieState,
  (state: MovieState) => state.error
);

export const getMovies  = createSelector(
  getMovieState,
  (state: MovieState) => state.movies
);
