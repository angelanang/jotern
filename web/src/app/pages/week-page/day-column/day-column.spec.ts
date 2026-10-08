import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayColumn } from './day-column';

describe('DayColumn', () => {
  let component: DayColumn;
  let fixture: ComponentFixture<DayColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayColumn],
    }).compileComponents();

    fixture = TestBed.createComponent(DayColumn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
