import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { NavTracerService } from 'src/app/shared-services/utilities/nav-tracer.service';
import * as navigations from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-why-bizcoveri',
  templateUrl: './why-bizcoveri.component.html',
  styleUrls: ['./why-bizcoveri.component.scss']
})
export class WhyBizcoveriComponent implements OnInit {
  color: string = "#242424";
  selectedRoute: string = null;
  firstNavList: NavigationModel[] = navigations.authpageNavigation;
  secondNavList: NavigationModel[] = navigations.customToolbarNavigation;
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
  constructor (private navTracer: NavTracerService) { }

  ngOnInit(): void {
    this.navTracer.routeReceiver.subscribe(res => {
      this.selectedRoute = res[1].path;
    });
  }

}
