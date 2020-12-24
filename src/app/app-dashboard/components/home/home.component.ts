import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userType: string;
  id: string;
  constructor (private dashboardService: DashboardService) {
    this.userType = localStorage.getItem("userType").toUpperCase();
    this.id = localStorage.getItem("message");
  }

  ngOnInit(): void {
    this.dashboardService.getClientProjects(this.id).subscribe(res => { });
  }
}
