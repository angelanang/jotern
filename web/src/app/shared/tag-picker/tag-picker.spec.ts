import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagPicker } from './tag-picker';

describe('TagPicker', () => {
  let component: TagPicker;
  let fixture: ComponentFixture<TagPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(TagPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
