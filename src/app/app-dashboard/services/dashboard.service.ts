import { Injectable } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor (private coreService: CoreService) { }

  getClientProjects(id: string) {
    return this.coreService.httpService.getList<any>(`project/clientid/${id}`);
  }

  getAllProjects() {
    return this.coreService.httpService.getList<any>("project/all");
  }
}
