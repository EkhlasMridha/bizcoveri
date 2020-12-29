import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatingIconComponent } from './components/rating-icon/rating-icon.component';



@NgModule({
  declarations: [RatingComponent, RatingIconComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [RatingComponent]
})
export class RatingBarModule { }
