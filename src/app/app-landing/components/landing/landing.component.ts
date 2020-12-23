import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authpageNavigation, customToolbarNavigation } from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  navList: NavigationModel[] = authpageNavigation;
  navigations: NavigationModel[] = customToolbarNavigation;
  constructor () { }

  ngOnInit(): void {
  }

}
