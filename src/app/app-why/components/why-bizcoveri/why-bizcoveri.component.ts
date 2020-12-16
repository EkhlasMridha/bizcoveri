import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { NavTracerService } from 'src/app/shared-services/utilities/nav-tracer.service';
import { authpageNavigation, customToolbarNavigation } from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-why-bizcoveri',
  templateUrl: './why-bizcoveri.component.html',
  styleUrls: ['./why-bizcoveri.component.scss']
})
export class WhyBizcoveriComponent implements OnInit {
  color: string = "#242424";
  selectedRoute: string = null;
  firstNavList: NavigationModel[] = authpageNavigation;
  secondNavList: NavigationModel[] = customToolbarNavigation;
  subscription: Subscription;
  detailsNavigation: NavigationModel[] = [
    {
      name: "Companies",
      route: "companies",
      type: 'primary'
    },
    {
      name: "Service Provider",
      route: "service-provider",
      type: 'secondary'
    }
  ];
  constructor (private navTracer: NavTracerService, private iconService: IconService) {
    this.iconService.loadIcons(['quality-person', 'collaboration', 'compliance', 'execution', 'globe', 'file']);
  }

  ngOnInit(): void {
    this.subscription = this.navTracer.routeReceiver.subscribe(res => {
      this.selectedRoute = res[1].path;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
