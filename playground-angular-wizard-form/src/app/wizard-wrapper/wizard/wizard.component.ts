import { AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import { WizardStepDirective } from '../../wizard-step.directive';

import { WizardStepService } from './wizard-step.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit {
  @ContentChildren(WizardStepDirective, { read: WizardStepService })
  steps: QueryList<WizardStepService>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.steps.toArray());
    this.steps.toArray().forEach((x) => {
      console.log(x);
      x.show();
    });
    // this.steps.changes.subscribe((d: WizardStepService[]) => {
    //   d[0].show();
    //   console.log(d);
    // });
  }
}
