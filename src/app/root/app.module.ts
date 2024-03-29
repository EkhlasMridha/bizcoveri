import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { RootRoutingModule } from '../root-routing/RT-route-system/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomainService } from '@core/env-domain';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { InterceptorProvider } from '@http-interceptor/interceptor.provider';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { RootlineProgressbarModule } from "@modules/rootline-progressbar/rootline-progressbar.module";
import { CoreModule } from "@core/core.module";

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve(domainService);
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    RootlineProgressbarModule,
    ToastrModule.forRoot(),
    CoreModule
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    InterceptorProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
