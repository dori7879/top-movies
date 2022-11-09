import {createAction, props} from '@ngrx/store';
import {Movie} from "../../models/movies";

export const loadMovies = createAction('[TopMovies Component] load movies');

export const loadMoviesSuccess = createAction(
  '[TopMovies Component] load movies success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFailure = createAction(
  '[TopMovies Component] load movies failure',
  props<{ error: string | null }>()
);
