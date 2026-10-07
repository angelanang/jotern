import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagProductivity } from './tag-productivity';

describe('TagProductivity', () => {
  let component: TagProductivity;
  let fixture: ComponentFixture<TagProductivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagProductivity],
    }).compileComponents();

    fixture = TestBed.createComponent(TagProductivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
