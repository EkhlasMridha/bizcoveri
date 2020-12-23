import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizToolbarComponent } from './components/biz-toolbar/biz-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BizToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [BizToolbarComponent]
})
export class TopToolbarModule { }
