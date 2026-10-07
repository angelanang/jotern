import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntriesHighlights } from './entries-highlights';

describe('EntriesHighlights', () => {
  let component: EntriesHighlights;
  let fixture: ComponentFixture<EntriesHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntriesHighlights],
    }).compileComponents();

    fixture = TestBed.createComponent(EntriesHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
