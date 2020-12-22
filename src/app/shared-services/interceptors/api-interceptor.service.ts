import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomainService } from '../utilities/domain.service';
import { CoreService } from 'src/app/core/services/core.service';
import { delay, finalize } from 'rxjs/operators';

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
      console.log(req.url);
      return next.handle(req);
    }
    let request = req.clone({
      url: DomainService.domains.apiHost + req.url,
    });
    console.log('api');
    ++this.counter;
    setTimeout(() => {
      this.coreService.startLoader();
    }, 1000);
    return next.handle(request).pipe(
      finalize(() => {
        --this.counter;
        if (this.counter == 0) {
          this.coreService.stopLoader();
        }
      })
    );
  }
}
