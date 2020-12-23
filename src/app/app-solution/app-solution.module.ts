import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from "@material/shared-material.module";
import { TopToolbarModule } from "@modules/top-toolbar/top-toolbar.module";

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
    SharedMaterialModule,
  ]
})
export class AppSolutionModule { }
