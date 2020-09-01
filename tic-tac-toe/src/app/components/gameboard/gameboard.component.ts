import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player, Winner } from 'src/app/types.type';
import { GameboardCellComponent } from '../gameboard-cell/gameboard-cell.component';
import { GameLogic } from '../../game.service';

@Component({
  selector: 'gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

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
  }

  markCell(row: number, col: number) {
    // this.winners$.next(this.gameboardService.isGameOver(row, col));
    if (this.gameboardService.isGameOver(row, col)) {
      this.cells.forEach((cell) => {
        cell.clicked = true;
      })

      this.winnerExists.emit(this.gameboardService.getWinnerMessage());
    }
  }

}
