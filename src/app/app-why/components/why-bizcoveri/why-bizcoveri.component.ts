import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { CoreService } from "@core/core-service";
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
  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(['quality-person', 'collaboration', 'compliance', 'execution', 'globe', 'file']);
  }

  ngOnInit(): void {
    this.subscription = this.coreService.navTracerService.routeReceiver.subscribe(res => {
      this.selectedRoute = res[1].path;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
