import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './services/form.service';
import { HttpLoggerService } from './services/http-logger.service';
import { NavTracerService } from './services/nav-tracer.service';
import { RootlineProgressService } from './services/rootline-progress.service';
import { TokenService } from './services/token.service';
import { IconService } from './services/icon.service';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FormService,
    HttpLoggerService,
    NavTracerService,
    RootlineProgressService,
    TokenService,
    IconService,
    HttpService
  ],
  exports: [HttpClientModule]
})
export class CoreModule { }
