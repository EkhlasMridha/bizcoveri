import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      breadCrumb: 'Contact'
    }
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    TopToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class AppContactModule { }
