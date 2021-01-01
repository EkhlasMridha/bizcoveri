import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";
import { ProjectComponent } from './components/project/project.component';
import { MatTableModule } from '@angular/material/table';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { FormsMaterialModule } from '@material/forms-material.module';
import { RtVerticalStepperModule } from '@modules/rt-vertical-stepper/rt-vertical-stepper.module';
import { ProjectOverviewComponent } from './components/create-project/sub-components/project-overview/project-overview.component';
import { ProjectLogisticsComponent } from './components/create-project/sub-components/project-logistics/project-logistics.component';
import { EvaluationProcessComponent } from './components/create-project/sub-components/evaluation-process/evaluation-process.component';
import { TeamMembersComponent } from './components/create-project/sub-components/team-members/team-members.component';
import { ReviewComponent } from './components/create-project/sub-components/review/review.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from "@angular/material/radio";
import { TextFieldModule } from "@angular/cdk/text-field";
import { ServiceButtonModule } from '@modules/service-button/service-button.module';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';
import { ProjectConfirmComponent } from './components/project-confirm/project-confirm.component';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
  {
    path: "create-project",
    component: CreateProjectComponent,
    data: {
      breadCrumb: "Create project"
    }
  },
  {
    path: "project-finalize",
    component: ProjectConfirmComponent,
    data: {
      breadCrumb: "Confirm Project"
    }
  },
  {
    path: "pay-fee",
    component: PayFeeComponent,
    data: {
      breadCrumb: "Pay fee"
    }
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    CreateProjectComponent,
    ProjectOverviewComponent,
    ProjectLogisticsComponent,
    EvaluationProcessComponent,
    TeamMembersComponent,
    ReviewComponent,
    PayFeeComponent,
    ProjectConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    MatTableModule,
    RtVerticalStepperModule,
    MatSelectModule,
    MatRadioModule,
    TextFieldModule,
    ServiceButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule { }
