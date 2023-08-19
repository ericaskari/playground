import { Component, OnInit } from '@angular/core';

import { WizardStepService } from '../wizard/wizard-step.service';

@Component({
  selector: 'app-wizard-step-lastname',
  templateUrl: './wizard-step-lastname.component.html',
  styleUrls: ['./wizard-step-lastname.component.scss'],
  providers: [{ provide: WizardStepService, useExisting: WizardStepLastnameComponent }]
})
export class WizardStepLastnameComponent implements OnInit, WizardStepService {
  constructor() {}

  ngOnInit(): void {}

  hide(): void {}

  show(): void {}
}
