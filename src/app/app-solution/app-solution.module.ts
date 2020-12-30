import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";
import { TopToolbarModule } from "@modules/top-toolbar/top-toolbar.module";
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MatChipsModule } from "@angular/material/chips";
import { FormsMaterialModule } from '@material/forms-material.module';
import { AuthGuardService } from '@route-guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: SolutionComponent,
    data: {
      breadCrumb: "Solution"
    }
  },
  {
    path: 'project',
    component: ProjectDescriptionComponent,
    data: {
      breadCrumb: "Project"
    },
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'detail',
        pathMatch: "full"
      },
      {
        path: 'detail',
        component: ProjectDetailsComponent,
        data: {
          breadCrumb: "Project detail"
        }
      }
    ]
  }
];

@NgModule({
  declarations: [SolutionComponent, ProjectDescriptionComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    SharedMaterialModule,
    FormsMaterialModule,
    MatChipsModule
  ]
})
export class AppSolutionModule { }
