import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";
import { ProjectComponent } from './components/project/project.component';
import { MatTableModule } from '@angular/material/table';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { MatStepperModule } from "@angular/material/stepper";
import { FormsMaterialModule } from '@material/forms-material.module';
import { RtVerticalStepperModule } from '@modules/rt-vertical-stepper/rt-vertical-stepper.module';

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
      breadCrumb: "Create Project"
    }
  }
];

@NgModule({
  declarations: [HomeComponent, ProjectComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    MatTableModule,
    RtVerticalStepperModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule { }
