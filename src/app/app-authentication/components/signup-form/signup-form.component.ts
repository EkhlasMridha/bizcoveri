import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { CoreService } from 'src/app/core/services/core.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;

  errorObserver = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  constructor (private coreService: CoreService) { }

  ngOnInit(): void {
  }

  createForm() {
    return this.coreService.formBuilder.group({

    });
  }

  generateErrors(name: string, owner: string) {
    switch (owner) {
      case 'firstname':
        return 'First name is required';
      case 'lastname':
        return 'Last name is required';
      case 'userName':
        if (name == 'required') {
          return 'User name is required';
        } else if (name == 'isExists') {
          return 'User name is already taken';
        } else {
          return 'Invalid name';
        }
      case 'email':
        if (name == 'required') {
          return 'Email is required';
        } else if (name == 'isExists') {
          return 'Already has an account with this email';
        } else {
          return 'Invalid email';
        }
      case 'password':
        if (name == 'required') {
          return 'Password is required';
        } else {
          return 'Must contain both uppercase, lowercase letter and mini length 6, max 12';
        }
      case 'confirmPassword':
        if (name == 'required') {
          return 'Confirm password is required';
        } else {
          return 'Password must be same';
        }
    }
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.mustMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ mustMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    // if (!this.signupForm.valid) {

    // }
    this.coreService.iconService.printTest("Name");
  }
}
