import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CoreService } from 'src/app/core/services/core.service';
import { DomainService } from '@core/env-domain';
import { NavTracerService } from 'src/app/shared-services/utilities/nav-tracer.service';
import { SideNavigationModel } from '../../config/navigation.model';

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

  navigations: SideNavigationModel[] = [
    {
      name: "Notifications",
      route: "#",
      matIcon: "notifications"
    },
    {
      name: "Dashboard",
      route: "dashboard",
      matIcon: "dashboard"
    },
    {
      name: "Company Details",
      route: "#",
      matIcon: "list_alt"
    },
    {
      name: "Pricing",
      route: "#",
      localIcon: "rupee"
    },
    {
      name: "Account Settings",
      route: "#",
      matIcon: "settings_applications"
    },
    {
      name: "Meetings",
      route: "#",
      matIcon: "event_note"
    },
    {
      name: "Solution",
      route: "#",
      localIcon: "solution"
    },
    {
      name: "Help",
      route: "#",
      matIcon: "help"
    }
  ];

  constructor (private breakpointObserver: BreakpointObserver, private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["rupee", "solution"]);
  }
  ngOnInit(): void {
    this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.activatedRoute = res[0].path;
    });
  }

  openDrawer(drawer: MatDrawer) {
    drawer.toggle();
  }
}
