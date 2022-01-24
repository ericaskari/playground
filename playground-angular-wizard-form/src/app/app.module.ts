import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardStepBirthdayComponent } from './wizard-wrapper/wizard-step-birthday/wizard-step-birthday.component';
import { WizardStepLastnameComponent } from './wizard-wrapper/wizard-step-lastname/wizard-step-lastname.component';
import { WizardStepNameComponent } from './wizard-wrapper/wizard-step-name/wizard-step-name.component';
import { WizardStepDirective } from './wizard-step.directive';
import { WizardComponent } from './wizard-wrapper/wizard/wizard.component';
import { WizardWrapperComponent } from './wizard-wrapper/wizard-wrapper.component';
import { WizardStepComponent } from './wizard-wrapper/wizard-step/wizard-step.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepNameComponent,
    WizardStepLastnameComponent,
    WizardStepBirthdayComponent,
    WizardStepDirective,
    WizardWrapperComponent,
    WizardStepComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
