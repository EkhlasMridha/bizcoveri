import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      breadCrumb: "About"
    }
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TopToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class AppAboutModule { }
