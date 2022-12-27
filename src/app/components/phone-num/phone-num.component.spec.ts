import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumInputComponent } from './phone-num.component';

describe('InputComponent', () => {
  let component: PhoneNumInputComponent;
  let fixture: ComponentFixture<PhoneNumInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneNumInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneNumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
