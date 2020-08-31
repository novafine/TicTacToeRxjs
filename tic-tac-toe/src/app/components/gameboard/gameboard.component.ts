import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/types.type';
import { GameboardCellComponent } from '../gameboard-cell/gameboard-cell.component';
import { GameLogic } from '../../game.service';

@Component({
  selector: 'gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  player$: Observable<Player> = new Observable<Player>((subscriber) => {
    // Init value
    subscriber.next("X");
    subscriber.error(console.error);
    subscriber.complete();
  });;

  constructor(public gameboardService: GameLogic) { }

  ngOnInit(): void {
  }

  markCell(row: number, col: number) {
    this.gameboardService.updateGameboard(row, col);
  }

}
