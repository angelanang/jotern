import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutlinePreview } from './outline-preview';

describe('OutlinePreview', () => {
  let component: OutlinePreview;
  let fixture: ComponentFixture<OutlinePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(OutlinePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
