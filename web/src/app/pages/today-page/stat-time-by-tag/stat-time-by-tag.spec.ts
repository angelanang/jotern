import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatTimeByTag } from './stat-time-by-tag';

describe('StatTimeByTag', () => {
  let component: StatTimeByTag;
  let fixture: ComponentFixture<StatTimeByTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatTimeByTag],
    }).compileComponents();

    fixture = TestBed.createComponent(StatTimeByTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
