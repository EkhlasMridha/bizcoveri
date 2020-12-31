import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyBizcoveriComponent } from './components/why-bizcoveri/why-bizcoveri.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { RouterModule, Routes } from '@angular/router';
import { TopToolbarModule } from "@modules/top-toolbar/top-toolbar.module";
import { SharedMaterialModule } from "@material/shared-material.module";

const routes: Routes = [
  {
    path: '',
    component: WhyBizcoveriComponent,
    data: {
      breadCrumb: "Why Bizcoveri"
    },
    children: [
      { path: '', redirectTo: 'companies' },
      { path: 'companies', component: CompaniesComponent },
      { path: "service-provider", component: ServiceProviderComponent }
    ],
  }
];

@NgModule({
  declarations: [WhyBizcoveriComponent, CompaniesComponent, ServiceProviderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    TopToolbarModule
  ]
})
export class AppWhyModule { }
