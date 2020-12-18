import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class AppSolutionModule { }
