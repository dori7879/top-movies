import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieService } from '../../services/movies'
import {loadMovies, loadMoviesFailure, loadMoviesSuccess} from "./movie.actions";

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private moviesService: MovieService
  ) {}

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() => this.moviesService.getTopMovies()
        .pipe(
          map(res => {
            return loadMoviesSuccess({movies: res.items})
          }),
          catchError((error: any) => of(loadMoviesFailure({ error })))
        ))
    )
  );

}
