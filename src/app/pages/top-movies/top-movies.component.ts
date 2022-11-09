import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../models/movies";
import {Store} from "@ngrx/store";
import {getMovies} from "../../store/movie/movies.selectors";
import {loadMovies} from "../../store/movie/movie.actions";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(getMovies);

  constructor(
    private store: Store<{ movies: Movie[] }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadMovies())
  }

}
