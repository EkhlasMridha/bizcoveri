import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'authpage-wrapper',
  templateUrl: './authpage-wrapper.component.html',
  styleUrls: ['./authpage-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthpageWrapperComponent implements OnInit {
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;
  constructor () { }

  ngOnInit(): void {
  }

}
