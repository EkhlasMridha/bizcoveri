import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationModel } from '@contracts/navigation.model';

@Component({
  selector: 'project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDescriptionComponent implements OnInit {
  color: string = "#242424";
  navList: NavigationModel[] = [
    {
      name: "Project Details",
      route: "detail",
      type: "secondary"
    },
    {
      name: "Project Roles & Users",
      route: "#",
      type: "secondary"
    },
    {
      name: "Service Partner Selection",
      route: "#",
      type: "secondary"
    },
    {
      name: "Q & A",
      route: "#",
      type: "secondary"
    },
    {
      name: "Proposals",
      route: "#",
      type: "secondary"
    },
    {
      name: "Agreement",
      route: "#",
      type: "secondary"
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
