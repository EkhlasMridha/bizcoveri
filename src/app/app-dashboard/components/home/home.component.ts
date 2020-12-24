import { Component, OnInit } from '@angular/core';
import { ClientProjectCategory, ProjectCategory, VendorProjectCategory } from '../../configs/category.project';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userType: string;
  id: string;
  projectCategories: ProjectCategory[];
  private projects: any[] = [];
  constructor (private dashboardService: DashboardService) {
    this.userType = localStorage.getItem("userType").toUpperCase();
    this.id = localStorage.getItem("message");
  }

  ngOnInit(): void {
    this.initializeDashboard();
  }

  initializeDashboard() {
    if (this.userType == "CLIENT") {
      this.dashboardService.getClientProjects(this.id).subscribe(res => {
        this.projects = res.property;
        this.projectCategories = this.categorizeProjects(this.mapProjectsWithLifeCycle(this.projects));
      });
    } else {
      this.dashboardService.getAllProjects().subscribe(res => {
        this.projects = res.property;
        this.projectCategories = this.categorizeProjects(this.mapProjectsWithLifeCycle(this.projects));
        // console.log(this.projectCategories);
      });
    }
  }

  mapProjectsWithLifeCycle(projects: any[]): Map<string, ProjectCategory> {
    let projectCategories: ProjectCategory[] = this.getUserProjectCategory();
    let map: Map<string, ProjectCategory> = new Map();
    projectCategories.forEach(category => {
      map.set(category.lifeCycleStage, category);
    });

    projects.map(project => {

      if (project.lifecycleStage) {
        let data = map.get(project.lifecycleStage);
        if (data) {
          data.project = project;
          map.set(project.lifecycleStage, data);
        }
      }
    });

    return map;
  }

  categorizeProjects(map: Map<string, ProjectCategory>): ProjectCategory[] {
    let projectCategories: ProjectCategory[] = this.getUserProjectCategory();

    let data: ProjectCategory[] = projectCategories.filter(category => {
      let project = map.get(category.lifeCycleStage).project;
      if (project) {
        category.project = project;
        return category;
      }
    });

    return data;
  }

  getUserProjectCategory() {
    if (this.userType == "CLIENT") {
      return ClientProjectCategory;
    } else {
      return VendorProjectCategory;
    }
  }
}
