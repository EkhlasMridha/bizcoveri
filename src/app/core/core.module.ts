import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from '../shared-services/utilities/form.service';
import { HttpLoggerService } from '../shared-services/utilities/http-logger.service';
import { NavTracerService } from '../shared-services/utilities/nav-tracer.service';
import { RootlineProgressService } from '../shared-services/utilities/rootline-progress.service';
import { TokenService } from '../shared-services/utilities/token.service';
import { IconService } from '../shared-services/utilities/icon.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FormService,
    HttpLoggerService,
    NavTracerService,
    RootlineProgressService,
    TokenService,
    IconService,
  ]
})
export class CoreModule { }
