import { createReducer, on } from '@ngrx/store';
import { loadMovies, loadMoviesSuccess, loadMoviesFailure } from './movie.actions';
import {Movie} from "../../models/movies";

export interface MovieState {
  movies: Movie[];
  loaded: boolean;
  error?: string | null;
}

export const initialMovieState: MovieState = {
  movies: [],
  loaded: false,
  error: null,
};

export const movieReducer = createReducer(
  initialMovieState,
  on(loadMovies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(loadMoviesSuccess, (state, movies) => ({
    ...state,
    movies: movies
  })),
  on(loadMoviesFailure, (state, { error }) => ({ ...state, error })),
);
