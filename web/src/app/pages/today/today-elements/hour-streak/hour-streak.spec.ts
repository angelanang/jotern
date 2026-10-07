import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HourStreak } from './hour-streak';

describe('HourStreak', () => {
  let component: HourStreak;
  let fixture: ComponentFixture<HourStreak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourStreak],
    }).compileComponents();

    fixture = TestBed.createComponent(HourStreak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
