import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';
import { NavigationModel } from 'src/app/contracts/navigation.model';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;
  navigationList: NavigationModel[] = [
    {
      name: "Solution",
      route: "#",
      type: "secondary"
    },
    {
      name: "Why Bizcoveri?",
      route: "#",
      type: "secondary"
    },
    {
      name: "About",
      route: "#",
      type: "secondary"
    },
    {
      name: "Contact us",
      route: "#",
      type: "secondary"
    },
  ];

  errorObserver$ = {
    userName: '',
    password: '',
  };

  constructor (
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.formService.handleFormError(
      this.loginForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'userName':
        return 'User name is required';
      case 'password':
        return 'Password is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.formService.checkFormStatus(this.loginForm);
      return;
    }
    const result = Object.assign({}, this.loginForm.value);
    console.log(result);

    this.authService.signin(result).subscribe((res) => {
      console.log(res);
    });
  }
}
