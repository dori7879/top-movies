import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieService } from '../../services/movies'

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private moviesService: MovieService
  ) {}

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      mergeMap(() => this.moviesService.getTopMovies()
        .pipe(
          map(movies => ({ type: '[TopMovies Component] load movies success', payload: movies })),
          catchError(() => EMPTY)
        ))
    )
  );
}
