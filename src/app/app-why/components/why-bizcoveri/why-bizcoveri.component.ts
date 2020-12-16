import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import * as navigations from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-why-bizcoveri',
  templateUrl: './why-bizcoveri.component.html',
  styleUrls: ['./why-bizcoveri.component.scss']
})
export class WhyBizcoveriComponent implements OnInit {
  color: string = "#242424";
  firstNavList: NavigationModel[] = navigations.authpageNavigation;
  secondNavList: NavigationModel[] = navigations.customToolbarNavigation;
  constructor () { }

  ngOnInit(): void {
  }

}
