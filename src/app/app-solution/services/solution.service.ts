import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor () { }

  filterListByUserType<T>(list: T[]) {
    let userType: string = localStorage.getItem("userType");
    let data = list.filter(e => {
      if (e['userType'] == "shared" || e['userType'] == userType.toLowerCase()) {
        return e;
      }
    });

    return data;
  }
}
