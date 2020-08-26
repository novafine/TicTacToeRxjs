import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinsHistoryBoardComponent } from './wins-history-board.component';

describe('WinsHistoryBoardComponent', () => {
  let component: WinsHistoryBoardComponent;
  let fixture: ComponentFixture<WinsHistoryBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinsHistoryBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinsHistoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
