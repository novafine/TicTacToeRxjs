import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAgainBtnComponent } from './play-again-btn.component';

describe('PlayAgainBtnComponent', () => {
  let component: PlayAgainBtnComponent;
  let fixture: ComponentFixture<PlayAgainBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAgainBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAgainBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
