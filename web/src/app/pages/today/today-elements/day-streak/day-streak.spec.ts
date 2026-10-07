import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayStreak } from './day-streak';

describe('DayStreak', () => {
  let component: DayStreak;
  let fixture: ComponentFixture<DayStreak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayStreak],
    }).compileComponents();

    fixture = TestBed.createComponent(DayStreak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
