import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subscriber, Subscription, of, concat, BehaviorSubject, Subject } from 'rxjs';
import { GameLogic } from 'src/app/game.service';
import { Player, Winner } from 'src/app/types.type';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  winnings$: Subject<string>;

  constructor(public gameboardService: GameLogic) { }

  ngOnInit(): void {
    this.winnings$ = new Subject<string>();
  }

  onGameOver(event: string) {
    this.winnings$.next(event);
  }
}
