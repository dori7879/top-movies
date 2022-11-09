import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movies";
import {Observable} from "rxjs";
import {Movie} from "../../models/movies";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(
    private store: Store<{ movies: Movie[] }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[TopMovies Page] Load Movies' });
  }

}
