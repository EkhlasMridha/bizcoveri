import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';
import { ChildNavigations, ChildToolbarNavModel } from '../../models/child-toolbar.nav';

@Component({
  selector: 'child-toolbar',
  templateUrl: './child-toolbar.component.html',
  styleUrls: ['./child-toolbar.component.scss'],
})
export class ChildToolbarComponent implements OnInit {
  selectedNav: string;
  navList: ChildToolbarNavModel[];
  userType: string;
  constructor (private coreService: CoreService) {
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
    this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.selectedNav = res[2] ? res[2].path : res[0].path;
    });
    this.navList = this.filterNavigations(ChildNavigations);
  }

  filterNavigations(navigationList: ChildToolbarNavModel[]) {
    let data = navigationList.filter(nav => {
      if (nav.userType == this.userType.toLowerCase() || nav.userType == "shared") {
        return nav;
      }
    });
    return data;
  }

}
