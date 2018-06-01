import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FootballComponent } from './games/football/football.component';
import { SoccerComponent } from './games/soccer/soccer.component';
import { BracketComponent } from './bracket/bracket.component';
import { MatchComponent } from './match/match.component';

import { GameLoaderService } from './games/game-loader.service';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    SoccerComponent,
    BracketComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameLoaderService
  ],
  entryComponents: [
    FootballComponent,
    SoccerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
