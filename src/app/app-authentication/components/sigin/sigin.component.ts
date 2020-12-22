import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authPageToolbarNav } from "../../../shared-modules/navigations/customtoolbar.nav";
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { CoreService } from 'src/app/core/services/core.service';
import { SignInDto } from '../../dto/signin.dto';
import { SigninModel } from '../../dto/signin.dto';

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

  onSubmit() {
    if (!this.loginForm.valid) {
      this.coreService.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result: SigninModel = Object.assign({}, this.loginForm.value);
    let credential = new SignInDto(result);
    console.log(credential);

    this.authService.signin(credential).subscribe((res) => {
      console.log(res);
    });
  }
}
