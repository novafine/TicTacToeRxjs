import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { GameboardCellComponent } from './components/gameboard-cell/gameboard-cell.component';
import { HomeComponent } from './components/home/home.component';
import { PlayAgainBtnComponent } from './components/play-again-btn/play-again-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    GameboardCellComponent,
    HomeComponent,
    PlayAgainBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
