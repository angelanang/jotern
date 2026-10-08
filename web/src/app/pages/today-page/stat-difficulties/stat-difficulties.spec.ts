import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatDifficulties } from './stat-difficulties';

describe('StatDifficulties', () => {
  let component: StatDifficulties;
  let fixture: ComponentFixture<StatDifficulties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatDifficulties],
    }).compileComponents();

    fixture = TestBed.createComponent(StatDifficulties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
