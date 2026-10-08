import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutlineBlock } from './outline-block';

describe('OutlineBlock', () => {
  let component: OutlineBlock;
  let fixture: ComponentFixture<OutlineBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlineBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(OutlineBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
