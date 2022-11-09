import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/movie/movie.reducer';
import { EffectsModule } from '@ngrx/effects'
import {MovieEffects} from "./store/movie/movies.effects";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({'movies': reducer}),
    EffectsModule.forRoot([MovieEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
