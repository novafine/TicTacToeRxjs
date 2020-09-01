import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { GameboardCellComponent } from './components/gameboard-cell/gameboard-cell.component';
import { HomeComponent } from './components/home/home.component';
import { PlayAgainBtnComponent } from './components/play-again-btn/play-again-btn.component';
import { WinsHistoryBoardComponent } from './components/wins-history-board/wins-history-board.component';
import { GameLogic } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    GameboardCellComponent,
    HomeComponent,
    PlayAgainBtnComponent,
    WinsHistoryBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [GameLogic],
  bootstrap: [AppComponent]
})
export class AppModule { }
