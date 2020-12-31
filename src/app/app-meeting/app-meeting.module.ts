import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './components/meeting/meeting.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';
import { MatRippleModule } from "@angular/material/core";

const routes: Routes = [
  {
    path: '',
    component: MeetingComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MatRippleModule,
    RouterModule.forChild(routes)
  ]
})
export class AppMeetingModule { }
