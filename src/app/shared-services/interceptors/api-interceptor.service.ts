import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DomainService } from '../utilities/domain.service';
import { CoreService } from 'src/app/core/services/core.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  private counter: number = 0;
  constructor (private coreService: CoreService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.search(/^.*(.svg)$/) >= 0) {
      return next.handle(req);
    }
    let request = req.clone({
      url: DomainService.domains.apiHost + req.url,
    });

    this.startLoader();

    this.coreService.logMessage(`==> Request payload [${request.url}] <==`, request.body);

    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.coreService.logMessage(`==> Response data [${res.url}] <==`, res.body);
          this.stopLoader();
        }
      }),
      finalize(() => {
        this.stopLoader();
      })
    );
  }

  private startLoader() {
    this.coreService.startLoader();
  }

  private stopLoader() {
    this.coreService.stopLoader();
  }
}
