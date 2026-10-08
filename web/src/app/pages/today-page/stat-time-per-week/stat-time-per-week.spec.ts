import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatTimePerWeek } from './stat-time-per-week';

describe('StatTimePerWeek', () => {
  let component: StatTimePerWeek;
  let fixture: ComponentFixture<StatTimePerWeek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatTimePerWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(StatTimePerWeek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
