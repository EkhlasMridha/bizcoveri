import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenModel } from '@core/services/token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CoreService } from '@core/core-service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor (private coreService: CoreService, private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.coreService.tokenService.getToken()) {
      req = this.addToken(req, this.coreService.tokenService.getToken());
    }

    return next.handle(req).pipe(
      catchError((res) => {
        this.coreService.stopLoader();
        if (res instanceof HttpErrorResponse && res.status == 401 && this.coreService.tokenService.isTokenExpired()) {
          this.coreService.tokenService.removeToken();
          this.router.navigate(['login']);
          return null;
        }
        return throwError(res);
      })
    );
  }

  private addToken(
    request: HttpRequest<any>,
    token: Partial<TokenModel>
  ): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    return request;
  }
}
