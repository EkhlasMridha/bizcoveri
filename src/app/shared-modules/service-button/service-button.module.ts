import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceButtonComponent } from './components/service-button/service-button.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ServiceButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [ServiceButtonComponent]
})
export class ServiceButtonModule { }
