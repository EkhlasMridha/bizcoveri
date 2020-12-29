import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SharedMaterialModule } from '@material/shared-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppNotificationsModule { }
