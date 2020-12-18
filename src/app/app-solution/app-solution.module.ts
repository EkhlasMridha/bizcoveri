import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';

const routes: Routes = [
  {
    path: '',
    component: SolutionComponent,
    data: {
      breadCrumb: "Solution"
    }
  }
];

@NgModule({
  declarations: [SolutionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class AppSolutionModule { }
