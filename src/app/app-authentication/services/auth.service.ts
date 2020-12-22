import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  tap,
  retry,
  catchError,
} from 'rxjs/operators';
import {
  TokenService,
  TokenModel,
} from 'src/app/shared-services/utilities/token.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';
import { SignUpDto } from '../dto/signup.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor (
    private http: HttpClient,
    private coreService: CoreService,
    private router: Router
  ) { }

  signUp(payload: SignUpDto) {
    return this.http.post('auth/signup', payload).pipe(
      catchError((err) => {
        return throwError(err);
      }),
      tap((res) => {
        this.router.navigate(["login"]);
      })
    );
  }

  signin(payload: any) {
    return this.http.post<TokenModel>('auth/login', payload).pipe(
      retry(2),
      catchError((err) => {
        return throwError(err);
      }),
      tap((res) => {
        this.coreService.tokenService.storeToken(res);
        this.router.navigate(['']);
      })
    );
  }

  resetRequest(userIdentity: string) {
    let email = null;
    let username = null;
    let isEmail = userIdentity.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    let queryParams = new HttpParams();

    if (isEmail == 0) {
      email = userIdentity;
      queryParams = queryParams.append('Email', email);
    } else {
      username = userIdentity;
      queryParams = queryParams.append('UserName', username);
    }
    console.log(email + ' ' + typeof username);

    return this.http
      .get('identity/reset_request', { params: queryParams })
      .pipe(
        retry(3),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  resetPassword(payload: any) {
    return this.http.post(`identity/reset_password`, payload).pipe(
      retry(3),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
