import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { CoreService } from 'src/app/core/services/core.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { ValidationService } from '../../services/validation.service';

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
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    phone: null,
    password: null,
    confirmPassword: null,
    location: null,
    function: null,
    designation: null
  };

  constructor (private coreService: CoreService,
    private formBuilder: FormBuilder,
    private validationService: ValidationService) { }

  ngOnInit(): void {
    this.signupForm = this.createForm();
    this.coreService.formService.handleFormError(this.signupForm, this.errorObserver, this.validationService.errorMessageHandler);
    this.signupForm.controls["confirmPassword"].disable();
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstname: ['', Validators.compose([Validators.minLength(3)])],
      lastname: ['', Validators.compose([Validators.minLength(3)])],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      location: [''],
      function: [''],
      designation: ['']
    },
      {
        validators: [
          this.validationService.MustMatch("password", "confirmPassword"),
          this.validationService.MustMatch("password", "confirmPassword")
        ]
      }
    );
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      this.coreService.formService.checkFormStatus(this.signupForm);
      return;
    }

    const result = Object.assign({}, this.signupForm.value);
    console.log(result);
  }
}
