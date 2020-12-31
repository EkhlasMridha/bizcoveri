import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { DomainService } from '@core/env-domain';
import { CoreService } from 'src/app/core/services/core.service';
import { SignInDto } from '../../dto/signin.dto';
import { SigninModel } from '../../dto/signin.dto';
import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;
  isLoading$: Observable<boolean>;
  signInError$: Subject<string> = new Subject<string>();
  subscription: Subscription;
  errorObserver$ = {
    username: '',
    password: '',
  };

  constructor (
    private coreService: CoreService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.coreService.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
    this.isLoading$ = this.coreService.rootlineProgressListener();
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'username':
        return 'User name is required';
      case 'password':
        return 'Password is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleLoginError(error: string) {
    if (error = 'Invalid Username/Password') {
      this.signInError$.next("Invalid username or password");
    } else {
      this.signInError$.next("Unknown error occurred");
    }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.coreService.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result: SigninModel = Object.assign({}, this.loginForm.value);
    let credential = new SignInDto(result);


    this.subscription = this.authService.login(credential).pipe(
      catchError(res => {
        this.handleLoginError(res.error.error_description);
        return throwError(res);
      })
    ).subscribe(res => { });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
