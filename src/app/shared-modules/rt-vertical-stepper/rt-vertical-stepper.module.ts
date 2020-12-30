import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtStepperComponent } from './components/rt-stepper/rt-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RtStepContentComponent } from './components/rt-step-content/rt-step-content.component';



@NgModule({
  declarations: [RtStepperComponent, RtStepContentComponent],
  imports: [
    CommonModule,
    CdkStepperModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RtStepperComponent, CdkStepperModule]
})
export class RtVerticalStepperModule { }
