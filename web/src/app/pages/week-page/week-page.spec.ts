import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekPage } from './week-page';

describe('WeekPage', () => {
  let component: WeekPage;
  let fixture: ComponentFixture<WeekPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
