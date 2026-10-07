import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayEntries } from './day-entries';

describe('DayEntries', () => {
  let component: DayEntries;
  let fixture: ComponentFixture<DayEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayEntries],
    }).compileComponents();

    fixture = TestBed.createComponent(DayEntries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
