import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepNameComponent } from './wizard-step-name.component';

describe('WizardStepNameComponent', () => {
  let component: WizardStepNameComponent;
  let fixture: ComponentFixture<WizardStepNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
