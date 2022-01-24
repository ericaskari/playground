import { Component, OnInit } from '@angular/core';

import { WizardStepService } from '../wizard/wizard-step.service';

@Component({
  selector: 'app-wizard-step-birthday',
  templateUrl: './wizard-step-birthday.component.html',
  styleUrls: ['./wizard-step-birthday.component.scss'],
  providers: [{ provide: WizardStepService, useExisting: WizardStepBirthdayComponent }]
})
export class WizardStepBirthdayComponent implements OnInit, WizardStepService {
  constructor() {}

  ngOnInit(): void {}

  hide(): void {}

  show(): void {}
}
