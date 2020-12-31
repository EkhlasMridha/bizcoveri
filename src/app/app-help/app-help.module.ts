import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './components/help/help.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';

const routes: Routes = [
  {
    path: "",
    component: HelpComponent,
    data: {
      breadCrumb: ""
    }
  }
];

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppHelpModule { }
