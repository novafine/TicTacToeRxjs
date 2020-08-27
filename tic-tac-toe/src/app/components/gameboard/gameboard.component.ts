import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/types.type';

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

  constructor() { }

  ngOnInit(): void {
  }

}
