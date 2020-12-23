import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './services/form.service';
import { HttpLoggerService } from './services/http-logger.service';
import { NavTracerService } from './services/nav-tracer.service';
import { RootlineProgressService } from './services/rootline-progress.service';
import { TokenService } from './services/token.service';
import { IconService } from './services/icon.service';



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
