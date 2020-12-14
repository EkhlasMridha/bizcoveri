import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      breadCrumb: "Landing"
    }
  }
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    TopToolbarModule
  ]
})
export class AppLandingModule { }
