import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootlineProgressbarComponent } from './components/rootline-progressbar/rootline-progressbar.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";


@NgModule({
  declarations: [RootlineProgressbarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [RootlineProgressbarComponent]
})
export class RootlineProgressbarModule { }
