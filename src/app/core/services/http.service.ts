import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor (private http: HttpClient) { }

  getList<T>(url: string) {
    return this.http.get<T[]>(url);
  }

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, payload: T) {
    return this.http.post<any>(url, payload);
  }
}
