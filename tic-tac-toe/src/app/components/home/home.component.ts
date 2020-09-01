import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subscriber, Subscription, of, concat, BehaviorSubject, Subject } from 'rxjs';
import { GameLogic } from 'src/app/game.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // stream of turns to message whose turn it is now
  // isWin observable of true and false
  winnings$: Subject<string>;

  constructor(public gameboardService: GameLogic) { }

  ngOnInit(): void {
    // this.winnings$ = of("wellooo", "what", this.gameboardService.winner);
    // this.winnings$ = new Observable<string>((subscriber) => {
    //   subscriber.next(this.gameboardService.winner);
    // })
    this.winnings$ = new Subject<string>();
  }

  onGameOver(event) {
    this.winnings$.next(event);
  }
}
