import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

export interface TokenModel {
  accessToken: string;
  userType: string;
}

@Injectable()
export class TokenService {
  private readonly accessToken: string = 'accessToken';
  private readonly userType: string = "userType";
  constructor (private jwtService: JwtHelperService, private http: HttpClient) { }

  storeToken(token: Partial<TokenModel>) {
    localStorage.setItem(this.accessToken, token.accessToken);
    localStorage.setItem(this.userType, token.userType);
  }

  removeToken() {
    localStorage.clear();
  }

  getToken(): Partial<TokenModel> {
    let access = localStorage.getItem(this.accessToken);
    if (!(access)) {
      return null;
    }

    let token: Partial<TokenModel> = {
      accessToken: access,
    };

    return token;
  }

  isTokenExpired(): boolean {
    let access = localStorage.getItem(this.accessToken);
    return this.jwtService.isTokenExpired(access);
  }

  refreshAccessToken() {
    let token = this.getToken();
    if (token == null) {
      return null;
    }

    return this.http.post('identity/refresh', this.getToken());
  }

  hasToken() {
    if (this.getToken() == null) {
      return false;
    }

    return true;
  }
}
