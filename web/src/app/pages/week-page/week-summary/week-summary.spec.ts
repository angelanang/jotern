import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekSummary } from './week-summary';

describe('WeekSummary', () => {
  let component: WeekSummary;
  let fixture: ComponentFixture<WeekSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
