import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrongPage } from './wrong-page';

describe('WrongPage', () => {
  let component: WrongPage;
  let fixture: ComponentFixture<WrongPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WrongPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
