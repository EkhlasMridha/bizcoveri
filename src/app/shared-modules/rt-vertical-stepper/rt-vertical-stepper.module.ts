import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtStepperComponent } from './components/rt-stepper/rt-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { RtContentComponent } from './components/rt-content/rt-content.component';
import { RtHeaderComponent } from './components/rt-header/rt-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [RtStepperComponent, RtContentComponent, RtHeaderComponent],
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
