import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import * as navigations from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  firstNavList: NavigationModel[] = navigations.authpageNavigation;
  secondNavList: NavigationModel[] = navigations.customToolbarNavigation;
  constructor () { }

  ngOnInit(): void {
  }

}
