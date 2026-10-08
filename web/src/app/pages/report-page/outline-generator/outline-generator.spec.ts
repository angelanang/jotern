import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutlineGenerator } from './outline-generator';

describe('OutlineGenerator', () => {
  let component: OutlineGenerator;
  let fixture: ComponentFixture<OutlineGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlineGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(OutlineGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
