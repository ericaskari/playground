import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepLastnameComponent } from './wizard-step-lastname.component';

describe('WizardStepLastnameComponent', () => {
  let component: WizardStepLastnameComponent;
  let fixture: ComponentFixture<WizardStepLastnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepLastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
