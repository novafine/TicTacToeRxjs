import { Component, OnInit, Input } from '@angular/core';
import { Player } from "../../types.type";
import { Observable } from 'rxjs';

@Component({
  selector: 'gameboard-cell',
  templateUrl: './gameboard-cell.component.html',
  styleUrls: ['./gameboard-cell.component.scss']
})
export class GameboardCellComponent implements OnInit {

  @Input() player: Player;
  clicked: boolean;

  constructor() { }

  ngOnInit(): void {
    this.clicked = false;
  }

}
