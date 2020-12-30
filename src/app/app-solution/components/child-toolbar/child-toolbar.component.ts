import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationModel } from '@contracts/navigation.model';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'child-toolbar',
  templateUrl: './child-toolbar.component.html',
  styleUrls: ['./child-toolbar.component.scss'],
})
export class ChildToolbarComponent implements OnInit {
  selectedNav: string;
  navList: NavigationModel[] = [
    {
      name: "Project Details",
      route: "detail",
      type: "secondary"
    },
    {
      name: "Project Roles & Users",
      route: "project-roles",
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
  constructor (private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.selectedNav = res[2].path;
      console.log(this.selectedNav);
    });
  }

}
