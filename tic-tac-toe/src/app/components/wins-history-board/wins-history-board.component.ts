import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'wins-history-board',
  templateUrl: './wins-history-board.component.html',
  styleUrls: ['./wins-history-board.component.scss']
})
export class WinsHistoryBoardComponent implements OnInit, OnDestroy {

  winningsHistory$: Observable<string>;
  winningsSubscription: Subscription;
  winningsList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.winningsSubscription = this.winningsHistory$.subscribe((observer) => {
      this.winningsList.push(observer);
    })
  }

  ngOnDestroy(): void {
    this.winningsSubscription.unsubscribe();
  }
}
