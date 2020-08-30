import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // stream of turns to message whose turn it is now
  // isWin observable of true and false
  winnings$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.winnings$ = new Observable<string>(Subscriber => {
      Subscriber.next("wellooooo");
    });
  }

}
