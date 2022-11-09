import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {MovieResponse} from "../models/movies";
import {rests} from "../rests";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getTopMovies(): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(rests.movies.get);
  }
}

