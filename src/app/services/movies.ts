import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Movie} from "../models/movies";
import {rests} from "../rests";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getTopMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(rests.movies.get);
  }
}

