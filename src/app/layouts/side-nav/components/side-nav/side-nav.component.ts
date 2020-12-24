import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CoreService } from '@core/core-service';
import { DomainService } from '@core/env-domain';
import { SideNavigationModel } from '../../config/navigation.model';
import { Navigations } from "../../config/navigation-list.nav";
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  appName: string = DomainService.domains.AppName;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  activatedRoute: string = '';
  userStatus: string;
  userType: string;

  navigationList: SideNavigationModel[] = Navigations;

  constructor (private breakpointObserver: BreakpointObserver, private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["rupee", "solution"]);
    this.prepareNavigations();
  }
  ngOnInit(): void {
    this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.activatedRoute = res[0].path;
    });
  }

  openDrawer(drawer: MatDrawer) {
    drawer.toggle();
  }

  prepareNavigations() {
    this.userStatus = localStorage.getItem("status");
    this.userType = localStorage.getItem("userType");
    if (this.userStatus == null || this.userType == null) {
      this.coreService.tokenService.removeToken();
      window.location.reload();
    }
    this.navigationList = this.validateNavigations(this.navigationList);
  }

  validateNavigations(navigations: SideNavigationModel[]): SideNavigationModel[] {
    let filteredNav = navigations.filter(nav => {
      if (this.userType.toUpperCase() == nav.role.toUpperCase() || nav.role.toUpperCase() == "ANONYMOUS") {

        if (!nav.completedProfile) {
          return nav;
        } else {
          if (this.userStatus == '1') {
            return nav;
          }
        }

      }
    });

    return filteredNav;
  }
}
