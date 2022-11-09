import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/movie/movie.reducer';
import { EffectsModule } from '@ngrx/effects'
import {MovieEffects} from "./store/movie/movies.effects";

@NgModule({
  declarations: [
    AppComponent,
    TopMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({movie: movieReducer}),
    EffectsModule.forFeature([MovieEffects]),
    EffectsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
