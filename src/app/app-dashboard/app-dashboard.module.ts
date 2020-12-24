import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";
import { ProjectComponent } from './components/project/project.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
];

@NgModule({
  declarations: [HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule { }
