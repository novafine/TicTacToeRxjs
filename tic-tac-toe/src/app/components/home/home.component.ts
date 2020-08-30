import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subscriber, Subscription, of, concat } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // stream of turns to message whose turn it is now
  // isWin observable of true and false
  winnings$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.winnings$ = of("wellooo", "what");
  }

  ngAfterViewInit(): void {
    this.winnings$ = concat(this.winnings$, of("stam"));
  }
}
