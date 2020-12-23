import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authpageNavigation, customToolbarNavigation } from 'src/app/shared-modules/navigations/customtoolbar.nav';
import { DomainService } from '@core/env-domain';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  color: string = DomainService.domains.ctColor;
  firstNavList: NavigationModel[] = authpageNavigation;
  secondNavList: NavigationModel[] = customToolbarNavigation;
  constructor () { }

  ngOnInit(): void {
  }

}
