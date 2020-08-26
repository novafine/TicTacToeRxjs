import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboardCellComponent } from './gameboard-cell.component';

describe('GameboardCellComponent', () => {
  let component: GameboardCellComponent;
  let fixture: ComponentFixture<GameboardCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameboardCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboardCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
