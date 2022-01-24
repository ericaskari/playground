import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepBirthdayComponent } from './wizard-step-birthday.component';

describe('WizardStepBirthdayComponent', () => {
  let component: WizardStepBirthdayComponent;
  let fixture: ComponentFixture<WizardStepBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
