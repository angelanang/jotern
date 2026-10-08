import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekHeader } from './week-header';

describe('WeekHeader', () => {
  let component: WeekHeader;
  let fixture: ComponentFixture<WeekHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
