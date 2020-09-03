import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
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

  private gameStateSub: Subscription;
  private playTurn$: Subject<any> = new Subject();
  gameboard$: BehaviorSubject<Player[][]> = new BehaviorSubject<Player[][]>([[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
  player$: BehaviorSubject<Player> = new BehaviorSubject<Player>('X');
  winnerMessage: string;

  @ViewChildren(GameboardCellComponent) cells: QueryList<GameboardCellComponent>;
  @Output() winnerExists: EventEmitter<string> = new EventEmitter<string>();

  constructor(private gameboardService: GameLogic) { }

  ngOnInit() {
    const markCell$ = this.playTurn$.pipe(
      tap(move => {
        move.gameboard[move.row][move.col] = move.player;
        this.gameboardService.numOfMarkedCells++;
      })
    )

    this.gameStateSub = markCell$.pipe(
      tap(move => {
        if (this.gameboardService.isWin(move.gameboard, move.player)) {
          this.winnerMessage = this.getWinnerMessage(move.player);
          this.winnerExists.emit(this.winnerMessage);

          // Cells disabling
          this.cells.forEach((cell) => {
            cell.clicked = true;
          });

        } else if (this.gameboardService.isTie(move.gameboard)) {
          this.winnerMessage = this.getWinnerMessage("tie");
          this.winnerExists.emit(this.winnerMessage);
        } else {
          move.player = move.player === 'X' ? 'O' : 'X';
          this.player$.next(move.player);
        }
      })
    )
      .subscribe();
  }

  ngOnDestroy() {
    this.gameStateSub.unsubscribe();
  }

  playTurn(row, col, gameboard, player) {
    this.playTurn$.next({ row, col, gameboard, player });
  }

  resetGame() {
    this.winnerMessage = undefined;
    this.player$.next('X');
    this.gameboardService.numOfMarkedCells = 0;
    this.gameboard$.next([[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
  }

  private getWinnerMessage(winner: string) {
    if (winner) {
      if (winner === "tie") {
        return "it's a tie!";
      }

      return `${winner} won!`;
    }

    return undefined;
  }
}
