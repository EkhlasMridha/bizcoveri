import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rt-stepper',
  templateUrl: './rt-stepper.component.html',
  styleUrls: ['./rt-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: CdkStepper, useExisting: RtStepperComponent }]
})
export class RtStepperComponent extends CdkStepper {

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
