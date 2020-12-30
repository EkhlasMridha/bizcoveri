import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { TopToolbarModule } from '@modules/top-toolbar/top-toolbar.module';
import { SharedMaterialModule } from "@material/shared-material.module";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      breadCrumb: "Home"
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
