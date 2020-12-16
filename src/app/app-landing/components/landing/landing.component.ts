import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import * as navigations from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  navList: NavigationModel[] = navigations.authpageNavigation;
  navigations: NavigationModel[] = navigations.customToolbarNavigation;
  constructor () { }

  ngOnInit(): void {
  }

}
