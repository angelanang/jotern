import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicsForm } from './basics-form';

describe('BasicsForm', () => {
  let component: BasicsForm;
  let fixture: ComponentFixture<BasicsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
