import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizCardComponent } from './components/biz-card/biz-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BizCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [BizCardComponent]
})
export class BizCardModule { }
