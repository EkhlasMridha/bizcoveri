import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rt-stepper',
  templateUrl: './rt-stepper.component.html',
  styleUrls: ['./rt-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: CdkStepper, useExisting: RtStepperComponent }]
})
export class RtStepperComponent extends CdkStepper {
  @Input() initialStep: number = 0;

  ngOnInit(): void {
    this.selectedIndex = this.initialStep;
  }
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    console.log(this._steps.forEach(step => {
      console.log(step);
    }));
  }
}
