import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './components/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
    data: {
      breadCrumb: ""
    }
  }
];

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppPricingModule { }
