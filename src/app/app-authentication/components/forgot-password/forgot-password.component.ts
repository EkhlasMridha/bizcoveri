import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authPageToolbarNav } from 'src/app/shared-modules/navigations/customtoolbar.nav';
import { DomainService } from '@core/env-domain';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;
  errorGenerator$ = {
    email: null,
  };
  constructor (
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService
  ) {
    this.forgotForm = this.createForm();
  }

  ngOnInit(): void {
    this.formService.handleFormError(
      this.forgotForm,
      this.errorGenerator$,
      this.generateError
    );
  }

  goBack() {
    history.back();
  }

  generateError(errorName: string, owner: string) {
    switch (owner) {
      case 'email':
        if (errorName == 'required') {
          return 'Field is required';
        }
    }
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.forgotForm.valid) {
      this.formService.checkFormStatus(this.forgotForm);
      return;
    }

    const result = Object.assign({}, this.forgotForm.value);

    console.log(result);
    // this.authService.resetRequest(result.user).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
