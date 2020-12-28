import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedMaterialModule } from '@material/shared-material.module';
import { RouterModule, Routes } from '@angular/router';
import { CompanyStepsComponent } from './components/company-steps/company-steps.component';
import { RtVerticalStepperModule } from '@modules/rt-vertical-stepper/rt-vertical-stepper.module';
import { StepBasicInfoComponent } from './components/step-basic-info/step-basic-info.component';
import { FormsMaterialModule } from '@material/forms-material.module';
import { StepCompanyDetailsComponent } from './components/step-company-details/step-company-details.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { StepTeamMembersComponent } from './components/step-team-members/step-team-members.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, CompanyStepsComponent, StepBasicInfoComponent, StepCompanyDetailsComponent, StepTeamMembersComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    RtVerticalStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class AppCompanyModule { }
