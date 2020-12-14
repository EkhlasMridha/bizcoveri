import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizToolbarComponent } from './components/biz-toolbar/biz-toolbar.component';
import { SharedMaterialModule } from '../shared-materials/shared-material/shared-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [BizToolbarComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MatToolbarModule
  ],
  exports: [BizToolbarComponent]
})
export class TopToolbarModule { }
