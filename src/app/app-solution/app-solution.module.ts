import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from "@material/shared-material.module";
import { TopToolbarModule } from "@modules/top-toolbar/top-toolbar.module";
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionComponent,
    data: {
      breadCrumb: "Solution"
    }
  },
  {
    path: 'description',
    component: ProjectDescriptionComponent,
    data: {
      breadCrumb: "Description"
    }
  }
];

@NgModule({
  declarations: [SolutionComponent, ProjectDescriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    FlexLayoutModule,
    SharedMaterialModule,
  ]
})
export class AppSolutionModule { }
