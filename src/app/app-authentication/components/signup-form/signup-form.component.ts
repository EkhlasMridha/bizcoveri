import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { CoreService } from 'src/app/core/services/core.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { SignUpDto } from '../../dto/signup.dto';
import { SignUpModel } from '../../dto/signup.dto';
import { AuthService } from '../../services/auth.service';
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
    private validationService: ValidationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createForm();
    this.coreService.formService.handleFormError(this.signupForm, this.errorObserver, this.validationService.errorMessageHandler);
    this.signupForm.controls["confirmPassword"].disable();
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstname: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(2), Validators.required])],
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
          this.validationService.shoudDisable("password", "confirmPassword")
        ]
      }
    );
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      this.coreService.formService.checkFormStatus(this.signupForm);
      return;
    }

    const result: SignUpModel = Object.assign({}, this.signupForm.value);
    result.roles = [{ "name": "ADMIN" }];
    result.usertype = "CLIENT";
    let data = new SignUpDto(result);
    console.log(data);
    this.authService.signUp(data).subscribe(res => {
      console.log(res);
    });
  }
}
