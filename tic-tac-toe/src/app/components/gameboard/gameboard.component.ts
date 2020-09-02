import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Player, Winner } from 'src/app/types.type';
import { GameboardCellComponent } from '../gameboard-cell/gameboard-cell.component';
import { GameLogic } from '../../game.service';

@Component({
  selector: 'gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  playTurn$: Subject<any> = new Subject();
  @ViewChildren(GameboardCellComponent) cells: QueryList<GameboardCellComponent>;
  @Output() winnerExists: EventEmitter<string> = new EventEmitter<string>();;
  // winners$: Subject<Winner> = new Subject<Winner>();
  // player$: Observable<Player> = new Observable<Player>((subscriber) => {
  //   // Init value
  //   subscriber.next("X");
  //   subscriber.error(console.error);
  //   subscriber.complete();
  // });

  constructor(public gameboardService: GameLogic) { }

  ngOnInit(): void {
    const markCell$ = this.playTurn$.pipe(
      tap(move => {
        move.gameboard[move.row][move.col] = move.player;
      })
    )

    const gameState$ = markCell$.pipe(
      map(move => {
        // if (this.gameboardService.isWin(move.gameboard, move.player)) {
        //   return this.gameboardService.getWinnerMessage();
        // } else {
        //   if (this.gameboardService.isTie()) {

        //   }
        //TODO: rewrite is game over
        if (this.gameboardService.isGameOver()) {
          return this.gameboardService.getWinnerMessage();
        } else {
          // return turn message
        }
      })
    )
      .subscribe();
  }

  playTurn(row, col, gameboard, player) {
    this.playTurn$.next({ row, col, gameboard, player });
  }

  markCell(row: number, col: number) {
    //subject -> next
    // this.winners$.next(this.gameboardService.isGameOver(row, col));
    if (this.gameboardService.isGameOver(row, col)) {
      this.cells.forEach((cell) => {
        cell.clicked = true;
      })

      this.winnerExists.emit(this.gameboardService.getWinnerMessage());
    }
  }

  ngOnDestroy() {
    
  }
  // cell click:
  // update gameboard -> stateCheck -> win -> history
  // 

}
