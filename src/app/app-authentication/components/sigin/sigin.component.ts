import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;
  color: string = DomainService.domains.ctColor;
  navigationList: NavigationModel[] = authPageToolbarNav;

  errorObserver$ = {
    email: '',
    password: '',
  };

  constructor (
    private coreService: CoreService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.coreService.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'email':
        return 'User name is required';
      case 'password':
        return 'Password is required';
    }
  }

  createForm() {
    return this.coreService.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.coreService.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result = Object.assign({}, this.loginForm.value);
    console.log(result);

    // this.authService.signin(result).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
