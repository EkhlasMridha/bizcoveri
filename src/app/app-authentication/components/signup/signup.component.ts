import { Component, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { SignUpModel } from '../../models/signup.model';
import { filter, map } from 'rxjs/operators';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ValidationService } from '../../services/validation.service';
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
  signUpForm: FormGroup;
  signUpModel: SignUpModel;
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
