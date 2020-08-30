import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/types.type';
import { GameboardCellComponent } from '../gameboard-cell/gameboard-cell.component';

@Component({
  selector: 'gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  gameboard: string[][];

  player$: Observable<Player> = new Observable<Player>((subscriber) => {
    // Init value
    subscriber.next("X");
    subscriber.error(console.error);
    subscriber.complete();
  });;

  constructor() { }

  ngOnInit(): void {
    this.gameboard = [["", "", ""], ["", "", ""], ["", "", ""]]
    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     this.gameboard[i][j] = "";
    //   }
    // }

  }

  markCell(row: number, col: number, player: Player) {
    this.gameboard[row][col] = player;

    // TODO: Disable cell
  }

}
