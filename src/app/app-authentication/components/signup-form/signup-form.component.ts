import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { CoreService } from '@core/core-service';
import { DomainService } from '@core/env-domain';
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
  isLoading$: Observable<boolean>;

  errorObserver = {
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    password: null,
    confirmPassword: null,
    location: null,
    function: null,
    designation: null
  };

  isVisible: boolean = false;
  constructor (private coreService: CoreService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private validationService: ValidationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createForm();
    this.coreService.formService.handleFormError(this.signupForm, this.errorObserver, this.validationService.errorMessageHandler);
    this.signupForm.controls["confirmPassword"].disable();
    this.isLoading$ = this.coreService.rootlineProgressListener();
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)]), this.validateUsername.bind(this)],
      email: ['', Validators.compose([Validators.required, Validators.email]), this.validateEmail.bind(this)],
      firstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      lastName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
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

  validateEmail({
    value,
  }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validationService.isEmailExists(value);
  }

  validateUsername({
    value,
  }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validationService.isUserNameAvailable(value);
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      this.coreService.formService.checkFormStatus(this.signupForm);
      return;
    }

    const result: SignUpModel = Object.assign({}, this.signupForm.value);
    result.roles = [{ "name": "ADMIN" }];
    let value: string = this.route.snapshot.queryParams.type;
    result.usertype = value.toUpperCase();
    let data = new SignUpDto(result);

    this.authService.signUp(data).subscribe(res => { });
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
