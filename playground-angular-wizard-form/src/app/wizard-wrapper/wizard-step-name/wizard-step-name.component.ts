import { Component, OnInit } from '@angular/core';

import { WizardStepService } from '../wizard/wizard-step.service';

@Component({
  selector: 'app-wizard-step-name',
  templateUrl: './wizard-step-name.component.html',
  styleUrls: ['./wizard-step-name.component.scss'],
  providers: [{ provide: WizardStepService, useExisting: WizardStepNameComponent }]
})
export class WizardStepNameComponent implements OnInit, WizardStepService {
  constructor() {}

  ngOnInit(): void {}

  hide(): void {}

  show(): void {}
}
