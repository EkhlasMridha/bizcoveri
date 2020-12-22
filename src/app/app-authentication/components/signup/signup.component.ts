import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { Router } from '@angular/router';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { DomainService } from 'src/app/shared-services/utilities/domain.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  color: string = DomainService.domains.ctColor;

  navigationList: NavigationModel[] = authPageToolbarNav;

  constructor (
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(routeType: string) {
    this.router.navigate(['signup-detail'], { queryParams: { type: routeType } });
  }
}
