import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ChipListComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  exports: [ChipListComponent]
})
export class ChipModuleModule { }
