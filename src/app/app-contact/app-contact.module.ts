import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';
import { RouterModule, Routes } from '@angular/router';

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
