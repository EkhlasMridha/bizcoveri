import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DomainService } from './domain.service';

@Injectable({
  providedIn: 'root'
})
export class HttpLoggerService {

  constructor () { }

  logData(message: string = "Log ", data: any) {
    if (DomainService.domains.logging) {
      console.log(message);
      console.log(data);
      console.log("-------------------------");
    }
  }

  httpWithLogging(observable: Observable<any>, data: any = null) {
    this.logData("==> Request payload <==", data);
    return observable.pipe(tap(res => {
      this.logData("==> Response data <==", res);
    }));
  }
}
