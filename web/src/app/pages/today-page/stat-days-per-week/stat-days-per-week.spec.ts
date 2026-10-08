import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatDaysPerWeek } from './stat-days-per-week';

describe('StatDaysPerWeek', () => {
  let component: StatDaysPerWeek;
  let fixture: ComponentFixture<StatDaysPerWeek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatDaysPerWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(StatDaysPerWeek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
