import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  tap,
  retry,
  catchError,
  switchMap,
} from 'rxjs/operators';
import { TokenModel } from '@core/services/token.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CoreService } from '@core/core-service';
import { SignUpDto } from '../dto/signup.dto';
import { LogInResponseModel } from '@contracts/login-response.model';
import { UserCheckModel } from '../models/user-check.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor (
    private http: HttpClient,
    private coreService: CoreService,
    private router: Router
  ) { }

  private signin(payload: any) {
    return this.http.post<LogInResponseModel>('auth/login', payload).pipe(
      retry(1),
      tap((res) => {
        this.coreService.tokenService.storeToken(res);
      }),
    );
  }

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

  login(payload: any) {
    return this.signin(payload).pipe(
      switchMap(res => {
        if (res.userType == "CLIENT") {
          return this.checkUser(`client/checkclientforuseremail/${res.userEmail}`);
        } else {
          return this.checkUser(`vendor/checkvendorforuseremail/${res.userEmail}`);
        }
      }),
      tap(res => {
        localStorage.setItem("message", res.Message);
        localStorage.setItem("name", res.Name);
        localStorage.setItem("status", res.Status);
        if (res.Status == "1") {
          this.router.navigate([""]);
        } else if (res.Status == "0") {
          this.router.navigate(["company-details"]);
        }
      })
    );
  }

  checkUser(url: string) {
    return this.http.get<UserCheckModel>(url);
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
