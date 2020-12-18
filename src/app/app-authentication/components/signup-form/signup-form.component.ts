import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;
  constructor () { }

  ngOnInit(): void {
  }

}
